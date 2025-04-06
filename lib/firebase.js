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

// ✅ Nastav iba na klientovi (v prehliadači) a s bezpečným prístupom k settings
if (typeof window !== "undefined") {
  try {
    // nastav len ak settings existuje (nie je undefined)
    if (auth.settings) {
      auth.settings.appVerificationDisabledForTesting = true;
    }
  } catch (error) {
    console.warn("⚠️ Nepodarilo sa vypnúť verifikáciu pre testing:", error);
  }
}

export { auth, RecaptchaVerifier };
