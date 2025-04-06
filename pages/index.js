import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css"; // ak máš CSS pre hlavnú stránku
import data from "../data/events.json";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(data); // načítame eventy zo súboru
  }, []);

  const handleAddToChystamSa = (event) => {
    const stored = JSON.parse(localStorage.getItem("chystamSa")) || [];
    const exists = stored.find((e) => e.name === event.name);

    if (!exists) {
      const updated = [...stored, event];
      localStorage.setItem("chystamSa", JSON.stringify(updated));
      alert("Pridané do Chystám sa ✅");
    } else {
      alert("Už máš tento event uložený.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Eventy</h1>

      {events.length === 0 ? (
        <p>Načítavam eventy...</p>
      ) : (
        events.map((event, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              position: "relative",
            }}
          >
            <h3>{event.name}</h3>
            <p>Dátum: {event.date}</p>
            <p>Lokalita: {event.location}</p>

            <button
              onClick={() => handleAddToChystamSa(event)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "40px",
                height: "40px",
                fontSize: "1.5rem",
                borderRadius: "50%",
                border: "none",
                background: "#000",
                color: "#fff",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              +
            </button>
          </div>
        ))
      )}
    </div>
  );
}
