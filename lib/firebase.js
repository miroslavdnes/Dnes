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

// 🔐 Bezpečná kontrola, či existuje `settings`
if (typeof window !== "undefined") {
  try {
    if ("settings" in auth) {
      auth.settings.appVerificationDisabledForTesting = true;
    } else {
      console.warn("⚠️ auth.settings je undefined");
    }
  } catch (error) {
    console.warn("⚠️ Nepodarilo sa nastaviť appVerificationDisabledForTesting:", error);
  }
}

export { auth, RecaptchaVerifier };
