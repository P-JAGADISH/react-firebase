// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneNumberInput from './PhoneNumberInput';
import OTPInput from './OtpInput';
import Success from './Success';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PhoneNumberInput />} />
          <Route path="/otp" element={<OTPInput />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
