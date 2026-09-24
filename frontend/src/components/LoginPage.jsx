import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  RefreshCw,
  Check,
  ShieldCheck,
  Lock,
  ArrowLeft
} from 'lucide-react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';
import { apiSendOtp, apiVerifyOtp, apiFirebaseLogin } from '../services/api';

export default function LoginPage({ onLoginSuccess, onBackToStore, customTitle, customSubtitle }) {
  const [screen, setScreen] = useState('phone'); // 'phone' | 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [devOtp, setDevOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const otpRefs = useRef([]);
  const phoneInputRef = useRef(null);

  // Autofocus phone input on load
  useEffect(() => {
    phoneInputRef.current?.focus();
  }, []);

  // Resend OTP countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Invisible Firebase reCAPTCHA
  const getRecaptchaVerifier = () => {
    if (window.meeshoPageRecaptchaVerifier) {
      try {
        window.meeshoPageRecaptchaVerifier.clear();
      } catch {}
      window.meeshoPageRecaptchaVerifier = null;
    }

    window.meeshoPageRecaptchaVerifier = new RecaptchaVerifier(auth, 'meesho-page-recaptcha-container', {
      size: 'invisible',
      callback: () => {},
      'expired-callback': () => {
        if (window.meeshoPageRecaptchaVerifier) {
          try {
            window.meeshoPageRecaptchaVerifier.clear();
          } catch {}
          window.meeshoPageRecaptchaVerifier = null;
        }
      }
    });

    return window.meeshoPageRecaptchaVerifier;
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
      // 1. Firebase Phone Auth
      const appVerifier = getRecaptchaVerifier();
      const formattedPhone = `+91${cleanPhone}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      window.confirmationResult = confirmation;
      setScreen('otp');
      setTimer(30);
      setTimeout(() => otpRefs.current[0]?.focus(), 150);
    } catch (fbErr) {
      console.warn('Firebase Phone Auth:', fbErr);

      // 2. Fallback to backend OTP
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

  // OTP inputs handling
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
        await window.confirmationResult.confirm(otpStr);
        const data = await apiFirebaseLogin(cleanPhone);
        if (data.success && data.token) {
          token = data.token;
          loggedUser = data.user;
        } else {
          throw new Error(data.message || 'Login failed');
        }
      } else {
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
      }
    } catch (err) {
      console.error('Verify error:', err);
      if (err?.code === 'auth/invalid-verification-code') {
        setError('Invalid OTP. Please check the code and try again.');
      } else {
        setError(err.message || 'Verification failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-140px)] bg-[#fcfafd] flex items-center justify-center p-4 sm:p-6 py-8">
      {/* ─── Center Login Card (Exact Meesho Style) ─── */}
      <div className="w-full max-w-[430px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
          {/* Meesho Signature Top Photo Banner */}
          <div className="relative h-44 sm:h-48 w-full bg-[#faedf2] overflow-hidden select-none">
            <img
              src="/banners/meesho_hero_model.jpg"
              alt="Meesho Fashion"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between bg-white text-left">
            {/* SCREEN 1: Phone */}
            {screen === 'phone' && (
              <div className="space-y-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                    {customTitle || 'Sign Up to view your profile'}
                  </h1>
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

                  {error && (
                    <div className="p-2.5 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-1.5">
                      <span className="font-bold">✕</span>
                      <span>{error}</span>
                    </div>
                  )}

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

                  <div id="meesho-page-recaptcha-container"></div>

                  <div className="text-center pt-2">
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      By continuing, you agree to Meesho's{' '}
                      <span className="text-[#9f2089] font-semibold hover:underline cursor-pointer">
                        Terms &amp; Conditions
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

            {/* SCREEN 2: OTP */}
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
                    className="text-xs font-bold text-[#9f2089] hover:underline flex items-center gap-1 mb-2 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Change phone number</span>
                  </button>

                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                    Verify with OTP
                  </h1>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    Sent to <span className="font-semibold text-gray-800">+91 {phone}</span>
                  </p>
                </div>

                {devOtp && (
                  <div
                    onClick={() => {
                      setOtp(devOtp.split(''));
                      setError('');
                    }}
                    className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-center justify-between cursor-pointer hover:bg-amber-100 transition"
                  >
                    <span>
                      Dev OTP: <strong className="font-mono text-sm tracking-wider">{devOtp}</strong>
                    </span>
                    <span className="text-[10px] underline font-bold text-amber-700">Auto-fill</span>
                  </div>
                )}

                {error && (
                  <div className="p-2.5 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-1.5">
                    <span className="font-bold">✕</span>
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleVerifyOtp} className="space-y-4 pt-1">
                  <div className="flex items-center justify-between gap-2">
                    {otp.map((val, idx) => (
                      <input
                        key={idx}
                        ref={(el) => (otpRefs.current[idx] = el)}
                        type="tel"
                        maxLength={1}
                        value={val}
                        onChange={(e) => handleOtpChange(e.target.value, idx)}
                        onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                        onPaste={idx === 0 ? handleOtpPaste : undefined}
                        className={`w-11 h-12 text-center text-lg font-bold rounded-lg border focus:outline-none transition-all ${
                          val
                            ? 'border-[#9f2089] bg-purple-50/20 text-[#9f2089]'
                            : 'border-gray-300 text-gray-800 focus:border-[#9f2089]'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span>Didn't receive code?</span>
                    {timer > 0 ? (
                      <span className="text-gray-400 font-medium">Resend in {timer}s</span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-[#9f2089] font-bold hover:underline cursor-pointer"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>

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
                        <Check className="w-4 h-4" />
                        <span>Verify &amp; Continue</span>
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
