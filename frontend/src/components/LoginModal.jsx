import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ChevronLeft,
  RefreshCw,
  Check,
  Edit2
} from 'lucide-react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';
import { apiSendOtp, apiVerifyOtp, apiFirebaseLogin } from '../services/api';

export default function LoginModal({ isOpen, onClose, onLoginSuccess, customTitle, customSubtitle }) {
  const [screen, setScreen] = useState('phone'); // 'phone' | 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [devOtp, setDevOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const otpRefs = useRef([]);
  const phoneInputRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset form and autofocus on open
  useEffect(() => {
    if (isOpen) {
      setScreen('phone');
      setError('');
      setDevOtp('');
      setLoading(false);
      setTimeout(() => {
        phoneInputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Resend OTP countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  if (!isOpen) return null;

  // Invisible Firebase reCAPTCHA
  const getRecaptchaVerifier = () => {
    if (window.meeshoRecaptchaVerifier) {
      try {
        window.meeshoRecaptchaVerifier.clear();
      } catch {
        // ignore
      }
      window.meeshoRecaptchaVerifier = null;
    }

    window.meeshoRecaptchaVerifier = new RecaptchaVerifier(auth, 'meesho-recaptcha-container', {
      size: 'invisible',
      callback: () => {},
      'expired-callback': () => {
        if (window.meeshoRecaptchaVerifier) {
          try {
            window.meeshoRecaptchaVerifier.clear();
          } catch {}
          window.meeshoRecaptchaVerifier = null;
        }
      }
    });

    return window.meeshoRecaptchaVerifier;
  };

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    if (e) e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 1. Try Firebase Phone Auth
      const appVerifier = getRecaptchaVerifier();
      const formattedPhone = `+91${cleanPhone}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      window.confirmationResult = confirmation;
      setScreen('otp');
      setTimer(30);
      setTimeout(() => otpRefs.current[0]?.focus(), 150);
    } catch (fbErr) {
      console.warn('Firebase Phone Auth:', fbErr);

      // 2. Backend Fallback
      try {
        const data = await apiSendOtp(cleanPhone);
        if (data && data.success) {
          if (data.otp) setDevOtp(data.otp);
          setScreen('otp');
          setTimer(30);
          setTimeout(() => otpRefs.current[0]?.focus(), 150);
        } else {
          setError(data?.message || fbErr.message || 'Failed to send OTP');
        }
      } catch (err) {
        console.error('Send OTP Error:', err);
        setError('Unable to send verification code. Please check your internet connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  // OTP box input with auto-advance and Paste support
  const handleOtpChange = (val, idx) => {
    const digit = val.replace(/\D/g, '').slice(-1);
    const updated = [...otp];
    updated[idx] = digit;
    setOtp(updated);

    if (digit && idx < 5) {
      otpRefs.current[idx + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length > 0) {
      const newOtp = [...otp];
      for (let i = 0; i < pasted.length; i++) {
        newOtp[i] = pasted[i];
      }
      setOtp(newOtp);
      const nextIdx = Math.min(pasted.length, 5);
      otpRefs.current[nextIdx]?.focus();
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    if (e) e.preventDefault();
    const otpStr = otp.join('');
    if (otpStr.length !== 6) {
      setError('Please enter the 6-digit OTP');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    setLoading(true);
    setError('');

    try {
      let loggedUser = null;
      let token = null;

      if (window.confirmationResult) {
        // Firebase confirmation
        await window.confirmationResult.confirm(otpStr);
        const data = await apiFirebaseLogin(cleanPhone);
        if (data.success && data.token) {
          token = data.token;
          loggedUser = data.user;
        } else {
          throw new Error(data.message || 'Login failed');
        }
      } else {
        // Backend verification
        const data = await apiVerifyOtp(cleanPhone, otpStr);
        if (data.success && data.token) {
          token = data.token;
          loggedUser = data.user;
        } else {
          throw new Error(data.message || 'Invalid OTP');
        }
      }

      if (token && loggedUser) {
        localStorage.setItem('ZYRIVO_token', token);
        localStorage.setItem('ZYRIVO_user', JSON.stringify(loggedUser));
        if (onLoginSuccess) {
          onLoginSuccess(loggedUser);
        }
        onClose();
      }
    } catch (err) {
      console.error('Verify error:', err);
      if (err?.code === 'auth/invalid-verification-code') {
        setError('Incorrect OTP. Please enter the valid code.');
      } else if (err?.code === 'auth/code-expired') {
        setError('OTP has expired. Please request a new code.');
      } else {
        setError(err.message || 'Verification failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* ═══ Exact Meesho Style Modal Box ═══ */}
      <div className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all animate-in zoom-in-95 duration-200">

        {/* ─── Prominent Cross (X) Close Button in Top Right ─── */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          title="Close (Esc)"
          className="absolute top-3.5 right-3.5 z-30 w-8 h-8 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
        >
          <X className="w-4.5 h-4.5 stroke-[2.5]" />
        </button>

        {/* ─── Meesho Signature Top Photo Banner ─── */}
        <div className="relative h-44 sm:h-48 w-full bg-[#faedf2] overflow-hidden select-none">
          <img
            src="/banners/meesho_hero_model.jpg"
            alt="Meesho Fashion"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              // High quality fallback if local image fails
              e.currentTarget.src = 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop';
            }}
          />
          {/* Subtle bottom gradient so text connects smoothly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* ─── Form Container ─── */}
        <div className="p-6 sm:p-7 flex flex-col justify-between bg-white text-left">

          {/* SCREEN 1: Phone Number Input (Exact Meesho Style) */}
          {screen === 'phone' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                  {customTitle || 'Sign Up to view your profile'}
                </h2>
                <p className="text-xs text-gray-500 mt-1 font-medium">
                  {customSubtitle || 'Enter your phone number to continue'}
                </p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-4 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Country
                  </label>
                  <div className="flex items-center border-b-2 border-gray-300 focus-within:border-[#9f2089] transition-colors py-1.5 gap-2">
                    <div className="flex items-center gap-1.5 text-sm font-bold text-gray-800 shrink-0 select-none">
                      <span>IN +91</span>
                    </div>

                    <input
                      ref={phoneInputRef}
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, ''));
                        setError('');
                      }}
                      placeholder="Phone Number"
                      className="w-full text-sm font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:outline-none tracking-wide bg-transparent"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-2.5 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-1.5">
                    <span className="font-bold">✕</span>
                    <span>{error}</span>
                  </div>
                )}

                {/* Meesho Signature Magenta/Purple Continue Button */}
                <button
                  type="submit"
                  disabled={loading || phone.length !== 10}
                  className={`w-full py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2 ${
                    phone.length === 10 && !loading
                      ? 'bg-[#9f2089] hover:bg-[#851972] text-white active:scale-[0.99]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending OTP...</span>
                    </>
                  ) : (
                    <span>Continue</span>
                  )}
                </button>

                {/* Invisible reCAPTCHA container */}
                <div id="meesho-recaptcha-container"></div>

                {/* Exact Meesho Terms & Conditions Text */}
                <div className="text-center pt-2">
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    By continuing, you agree to Meesho's{' '}
                    <span className="text-[#9f2089] font-semibold hover:underline cursor-pointer">
                      Terms & Conditions
                    </span>{' '}
                    and{' '}
                    <span className="text-[#9f2089] font-semibold hover:underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* SCREEN 2: Enter OTP Screen (Exact Meesho Style) */}
          {screen === 'otp' && (
            <div className="space-y-4">
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setScreen('phone');
                    setError('');
                    setOtp(['', '', '', '', '', '']);
                  }}
                  className="text-xs font-bold text-[#9f2089] hover:underline flex items-center gap-1 mb-2 transition cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Change Phone Number
                </button>

                <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                  Enter OTP
                </h2>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                  <span>Sent to <strong>+91 {phone}</strong></span>
                  <button
                    type="button"
                    onClick={() => {
                      setScreen('phone');
                      setError('');
                    }}
                    title="Change number"
                    className="text-[#9f2089] hover:underline cursor-pointer"
                  >
                    <Edit2 className="w-3 h-3 inline" />
                  </button>
                </div>
              </div>

              {/* Dev Auto-Fill Banner if test OTP available */}
              {devOtp && (
                <div
                  onClick={() => {
                    setOtp(devOtp.split(''));
                    setError('');
                  }}
                  className="p-2.5 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-900 font-medium flex items-center justify-between cursor-pointer hover:bg-amber-100 transition"
                >
                  <span className="flex items-center gap-1">
                    <span>🔐 Test OTP:</span>
                    <strong className="font-mono text-xs font-bold tracking-widest text-amber-950">{devOtp}</strong>
                  </span>
                  <span className="text-[10px] underline font-bold text-amber-800">Tap to Auto-Fill</span>
                </div>
              )}

              <form onSubmit={handleVerifyOtp} className="space-y-4 pt-1">
                {/* 6 Square OTP Digit Boxes with Paste Support */}
                <div className="flex gap-2 justify-between">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (otpRefs.current[idx] = el)}
                      type="tel"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, idx)}
                      onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                      onPaste={handleOtpPaste}
                      className={`w-11 h-12 text-center text-lg font-bold rounded-lg border transition focus:outline-none ${
                        digit
                          ? 'border-[#9f2089] bg-purple-50/30 text-gray-900 ring-1 ring-[#9f2089]'
                          : 'border-gray-300 bg-white text-gray-800 focus:border-[#9f2089] focus:ring-1 focus:ring-[#9f2089]'
                      }`}
                      autoFocus={idx === 0}
                    />
                  ))}
                </div>

                {/* Error Banner */}
                {error && (
                  <div className="p-2.5 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium text-center">
                    {error}
                  </div>
                )}

                {/* Resend OTP */}
                <div className="text-center text-xs text-gray-500">
                  {timer > 0 ? (
                    <span>
                      Resend OTP in <strong className="text-[#9f2089] font-bold">{timer}s</strong>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setOtp(['', '', '', '', '', '']);
                        setError('');
                        handleSendOtp();
                      }}
                      className="font-bold text-[#9f2089] hover:underline inline-flex items-center gap-1 cursor-pointer transition"
                    >
                      <RefreshCw className="w-3 h-3" /> RESEND OTP
                    </button>
                  )}
                </div>

                {/* Verify Submit Button */}
                <button
                  type="submit"
                  disabled={loading || otp.join('').length !== 6}
                  className={`w-full py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2 ${
                    otp.join('').length === 6 && !loading
                      ? 'bg-[#9f2089] hover:bg-[#851972] text-white active:scale-[0.99]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>VERIFY</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
