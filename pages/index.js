import Footer from '../components/Footer';
import { useState } from 'react';

const initialEvents = [
  {
    time: '19:00',
    title: 'Koncert v Novej Cvernovke',
    location: 'Nová Cvernovka',
    description: 'Naší Kraj odohrajú svoj nový album naživo.',
    category: 'Hudba',
    popularity: 12
  },
  {
    time: '22:00',
    title: 'Techno party v FUGE',
    location: 'FUGA',
    description: 'Zahrajú DJi Forma, Terna a Deepress.',
    category: 'Party',
    popularity: 21
  },
  {
    time: '19:30',
    title: 'Akustický večer v Kompót Kaviarni',
    location: 'Kompót Kaviareň',
    description: 'Príďte si užiť chill hudbu od miestnych umelcov.',
    category: 'Hudba',
    popularity: 8
  }
];

export default function HomePage() {
  const [events, setEvents] = useState(
    [...initialEvents].sort((a, b) => b.popularity - a.popularity)
  );

  return (
    <>
      <div style={{ padding: '2rem 1rem 5rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>DNESKA</h1>
        <h2 style={{ fontSize: '20px', marginTop: '0.5rem' }}>
          Dnes sa deje v Bratislave
        </h2>

        <div style={{ marginTop: '2rem' }}>
          {events.map((event, i) => (
            <div key={i} style={{
              marginBottom: '1rem',
              padding: '1rem',
              border: '1px solid #eee',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                {event.time} – {event.title}
              </div>
              <div style={{ fontSize: '14px', color: '#555' }}>{event.location}</div>
              <div style={{ fontSize: '13px', marginTop: '0.5rem', color: '#777' }}>
                {event.description}
              </div>
              <div style={{
                marginTop: '0.5rem',
                fontSize: '12px',
                background: '#000',
                color: '#fff',
                display: 'inline-block',
                padding: '2px 8px',
                borderRadius: '6px'
              }}>
                {event.category}
              </div>
              <div style={{
                marginTop: '0.5rem',
                fontSize: '12px',
                color: '#999'
              }}>
                👥 {event.popularity} ľudí sa chystá
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
