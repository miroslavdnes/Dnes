import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuJKqSNGMrlaikeRJFNGxKp79xFjS63yo",
  authDomain: "dneska-6da82.firebaseapp.com",
  projectId: "dneska-6da82",
  storageBucket: "dneska-6da82.appspot.com",
  messagingSenderId: "501291300546",
  appId: "1:501291300546:web:edb4706c00b351dee7ad5b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Ochránime pred spustením na serveri
if (typeof window !== "undefined") {
  // ✅ Počkáme, kým bude auth inicializované
  auth.languageCode = "sk"; // Nepovinné
  // V test mode zakážeme reálny reCAPTCHA
  try {
    auth.settings.appVerificationDisabledForTesting = true;
  } catch (e) {
    console.warn("Nepodarilo sa nastaviť testovací režim:", e);
  }
}

export { auth, RecaptchaVerifier };
