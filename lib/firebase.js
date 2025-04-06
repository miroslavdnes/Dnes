import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TVOJ_API_KEY",
  authDomain: "TVOJA_DOMENA.firebaseapp.com",
  projectId: "TVOJ_PROJECT_ID",
  storageBucket: "TVOJ_BUCKET.appspot.com",
  messagingSenderId: "TVOJE_ID",
  appId: "TVOJ_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✨ Toto musí ísť až PO getAuth a existencii settings
if (typeof window !== "undefined" && auth?.settings) {
  auth.settings.appVerificationDisabledForTesting = true;
}

export { auth, RecaptchaVerifier };
