import React, { useState } from 'react';
import { auth, setupRecaptcha, signInWithPhoneNumber } from './firebase'; // Ensure correct path
import { useNavigate } from 'react-router-dom';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault();
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        navigate('/otp');
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber", error);
      });
  };

  return (
    <div>
      <h2>Enter Phone Number</h2>
      <form onSubmit={handleSendCode}>
        <input 
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
        <div id="recaptcha-container"></div>
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};

export default PhoneNumberInput;
