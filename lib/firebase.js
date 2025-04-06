import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TVOJ_KLÚČ",
  authDomain: "TVOJA_DOMENA.firebaseapp.com",
  projectId: "TVOJE_ID",
  storageBucket: "TVOJE_BUCKET.appspot.com",
  messagingSenderId: "TVOJE_ID",
  appId: "TVOJE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 👇 len pre testovanie (SMS nebude poslané, stačí zadať testovací kód)
auth.settings.appVerificationDisabledForTesting = true;

export { auth, RecaptchaVerifier };
