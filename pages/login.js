import { useState } from "react";
import { signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function LoginPage() {
  const [phone, setPhone] = useState("+421900000000");
  const [code, setCode] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);

  const handleSendCode = async () => {
    try {
      const result = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      setConfirmResult(result);
      alert("Testovacie číslo, zadaj kód: 123456");
    } catch (error) {
      console.error("Chyba pri odoslaní kódu", error);
      alert("Chyba pri odoslaní kódu.");
    }
  };

  const handleVerifyCode = async () => {
    try {
      await confirmResult.confirm(code);
      alert("Prihlásenie úspešné ✅");
    } catch (error) {
      alert("Zlý overovací kód.");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Test Login (bez SMS)</h2>
      {!confirmResult ? (
        <>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+421..."
            style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
          />
          <button onClick={handleSendCode} style={{ width: "100%", padding: "1rem" }}>
            Poslať test kód
          </button>
        </>
      ) : (
        <>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Zadaj testovací kód (123456)"
            style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
          />
          <button onClick={handleVerifyCode} style={{ width: "100%", padding: "1rem" }}>
            Overiť
          </button>
        </>
      )}
    </div>
  );
}
