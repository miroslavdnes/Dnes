import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuJKqSNGMrlaikeRJFGNxKp79xFjS63yo",
  authDomain: "dneska-6da82.firebaseapp.com",
  projectId: "dneska-6da82",
  storageBucket: "dneska-6da82.appspot.com",
  messagingSenderId: "501291308546",
  appId: "1:501291308546:web:edb4706c0b351dee7ad5b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
