import { useState } from "react";
import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "./firebase";

function PhoneLogin() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);

    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                {
                    size: "normal",
                    callback: () => {
                        console.log("reCAPTCHA verified");
                    },
                }
            );
        }
    };

    const sendOTP = async () => {
        try {
            setupRecaptcha();

            const formattedPhone = `+91${phone}`;

            const result = await signInWithPhoneNumber(
                auth,
                formattedPhone,
                window.recaptchaVerifier
            );

            setConfirmationResult(result);

            alert("OTP sent successfully!");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    const verifyOTP = async () => {
        try {
            await confirmationResult.confirm(otp);

            alert("Login successful!");
        } catch (error) {
            console.error(error);
            alert("Invalid OTP");
        }
    };

    return (
        <div>
            <h2>Login with Phone</h2>

            <input
                type="tel"
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <button onClick={sendOTP}>
                Send OTP
            </button>

            <div id="recaptcha-container"></div>

            {confirmationResult && (
                <>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <button onClick={verifyOTP}>
                        Verify OTP
                    </button>
                </>
            )}
        </div>
    );
}

export default PhoneLogin;