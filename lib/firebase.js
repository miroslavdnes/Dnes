// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuJKqSNGMrlaikeRJFNGxKp79xFjS63yo",
  authDomain: "dneska-6da82.firebaseapp.com",
  projectId: "dneska-6da82",
  storageBucket: "dneska-6da82.appspot.com",
  messagingSenderId: "501291300546",
  appId: "1:501291300546:web:edb4706c00b351dee7ad5b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Tento blok je DÔLEŽITÝ pre testovanie bez SMS
// Kontroluje, ci sa da vypnut appVerification iba v browseri
if (typeof window !== "undefined") {
  try {
    if (auth.settings) {
      auth.settings.appVerificationDisabledForTesting = true;
    } else {
      console.warn("auth.settings je undefined");
    }
  } catch (error) {
    console.error("Chyba pri nastaveni appVerificationDisabledForTesting:", error);
  }
}

export { auth, RecaptchaVerifier };
