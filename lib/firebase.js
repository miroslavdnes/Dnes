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

// 👇 Veľmi dôležitá podmienka, aby to nespadlo na serveri
if (typeof window !== "undefined") {
  try {
    auth.settings.appVerificationDisabledForTesting = true;
  } catch (error) {
    console.warn("appVerificationDisabledForTesting nastavenie zlyhalo:", error);
  }
}

export { auth, RecaptchaVerifier };
