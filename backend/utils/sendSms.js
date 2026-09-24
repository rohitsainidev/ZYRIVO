/**
 * Fast2SMS has been removed in favor of Firebase Phone Authentication.
 * Phone verification and OTP are now handled directly via Firebase Auth on frontend.
 */

const sendSmsOtp = async (phone, otp) => {
  console.log(`[Firebase Auth Active] SMS dispatch migrated to Firebase. Phone: ${phone}`);
  return {
    success: true,
    message: 'SMS OTP is managed by Firebase Phone Authentication.',
  };
};

module.exports = { sendSmsOtp };
