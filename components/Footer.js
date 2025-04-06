import { useEffect } from "react";
import data from "../data/events.json";

export default function Footer() {
  const handleAdd = () => {
    const stored = JSON.parse(localStorage.getItem("chystamSa")) || [];
    const event = {
      name: "Názov eventu",
      date: "2025-04-10",
      location: "Bratislava"
    };

    const exists = stored.find((e) => e.name === event.name);

    if (!exists) {
      const updated = [...stored, event];
      localStorage.setItem("chystamSa", JSON.stringify(updated));
      alert("Pridané do Chystám sa ✅");
    } else {
      alert("Už to tam máš 😎");
    }
  };

  return (
    <footer style={{ padding: "2rem", textAlign: "center" }}>
      <div
        onClick={handleAdd}
        style={{
          fontSize: "3rem",
          cursor: "pointer",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        ➕
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#888" }}>
        Pridaj do "Chystám sa"
      </p>
    </footer>
  );
}
