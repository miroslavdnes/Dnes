import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuJKqSNGMrlaikeRJFNGxKp79xFjS63yo",
  authDomain: "dneska-6da82.firebaseapp.com",
  projectId: "dneska-6da82",
  storageBucket: "dneska-6da82.firebasestorage.app",
  messagingSenderId: "501291300546",
  appId: "1:501291300546:web:edb4706c00b351dee7ad5b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Toto zapne testovanie bez reálneho SMS (používa test čísla z Firebase konzoly)
auth.settings.appVerificationDisabledForTesting = true;

export { auth, RecaptchaVerifier };
