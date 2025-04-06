import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: () => {
              console.log("reCAPTCHA vyriešené");
            },
          },
          auth
        );
      }
    }
  }, []);

  const handleSendCode = async () => {
    if (typeof window === "undefined") return;

    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmResult(result);
      setStep(2);
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
      console.error("Chyba pri overení", error);
      alert("Nesprávny kód.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Prihlásenie</h2>

      {/* DEBUG - len aby si vedel že to beží na klientovi */}
      {typeof window === "undefined" && <p>⚠️ Beží na serveri</p>}

      {step === 1 && (
        <>
          <input
            type="tel"
            placeholder="+421..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
          />
          <button onClick={handleSendCode} style={{ width: "100%", padding: "1rem" }}>
            Odoslať kód
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Overovací kód"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
          />
          <button onClick={handleVerifyCode} style={{ width: "100%", padding: "1rem" }}>
            Overiť
          </button>
        </>
      )}

      {/* dôležité pre invisible recaptcha */}
      <div id="recaptcha-container"></div>
    </div>
  );
}

