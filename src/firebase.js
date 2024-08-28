// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM3IzILkGdOLjdLhms3wvjiemNxzujtfs",
  authDomain: "otpverification-7d633.firebaseapp.com",
  projectId: "otpverification-7d633",
  storageBucket: "otpverification-7d633.appspot.com",
  messagingSenderId: "801666198790",
  appId: "1:801666198790:web:b39d3dfbcd0e1b3eb2c287",
  measurementId: "G-7Q4CYJNN2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const setupRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {
          console.log("Recaptcha verified!");
        },
        'expired-callback': () => {
          console.warn("Recaptcha expired.");
        },
      },
      auth
    );
  }
};

export { auth, setupRecaptcha, signInWithPhoneNumber };
