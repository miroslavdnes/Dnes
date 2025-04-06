import { useState } from "react";
import { auth, RecaptchaVerifier } from "../lib/firebase";
import { signInWithPhoneNumber } from "firebase/auth";

export default function LoginPage() {
  const [phone, setPhone] = useState("+421900000000");
  const [code, setCode] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);
  const [step, setStep] = useState(1);

  const handleSendCode = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
          size: "invisible",
          callback: () => {}
        }, auth);
      }

      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmResult(result);
      setStep(2);
    } catch (error) {
      console.error("Chyba pri odoslaní kódu", error);
      alert("Nepodarilo sa odoslať kód.");
    }
  };

  const handleVerifyCode = async () => {
    try {
      await confirmResult.confirm(code);
      alert("✅ Prihlásenie úspešné");
    } catch (error) {
      alert("Nesprávny kód.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Test Login (bez SMS)</h2>

      {step === 1 && (
        <>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+421900000000"
            style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
          />
          <button onClick={handleSendCode} style={{ width: "100%", padding: "1rem" }}>
            Poslať test kód
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Zadaj testovací kód (napr. 123456)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
          />
          <button onClick={handleVerifyCode} style={{ width: "100%", padding: "1rem" }}>
            Overiť test kód
          </button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
}
