// OtpInput.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function OtpInput() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    const confirmationResult = window.confirmationResult;
    confirmationResult.confirm(otp).then((result) => {
      console.log('User signed in successfully.');
      navigate('/success');
    }).catch((error) => {
      console.error('Incorrect OTP', error);
    });
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <form onSubmit={handleVerifyOtp}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default OtpInput;
