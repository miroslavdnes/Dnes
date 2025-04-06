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

// 🚨 Musí byť v try-catch, nie každý build to zvláda
try {
  // Funguje len pri testing čísle vo Firebase
  auth.settings.appVerificationDisabledForTesting = true;
} catch (e) {
  console.warn("Nedalo sa vypnúť verifikáciu pre testing (je to OK na Verceli)", e);
}

export { auth, RecaptchaVerifier };
