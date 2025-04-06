import { useState } from "react";
import { auth } from "../lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
        size: "invisible",
        callback: () => handleSendCode(),
      }, auth);
    }
  };

  const handleSendCode = async () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const formattedPhone = phone.startsWith("+") ? phone : `+421${phone}`;
    try {
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmResult(confirmation);
    } catch (err) {
      alert("Chyba pri odoslaní kódu: " + err.message);
    }
  };

  const handleVerifyCode = async () => {
    try {
      await confirmResult.confirm(code);
      alert("Prihlásený! ✅");
    } catch (err) {
      alert("Nesprávny kód");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Prihlásenie cez telefón</h2>

      {!confirmResult ? (
        <>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Zadaj číslo napr. 900000000"
          />
          <br />
          <button onClick={handleSendCode}>Odoslať overovací kód</button>
        </>
      ) : (
        <>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Zadaj kód"
          />
          <br />
          <button onClick={handleVerifyCode}>Overiť</button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
}
