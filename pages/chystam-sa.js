
import Footer from '../components/Footer';
import { useState } from 'react';

const initialEvents = [
  {
    id: 1,
    time: '19:00',
    title: 'Koncert v Novej Cvernovke',
    location: 'Nová Cvernovka',
    description: 'Naší Kraj odohrajú svoj nový album naživo.',
    category: 'Hudba',
    added: true
  },
  {
    id: 2,
    time: '22:00',
    title: 'Techno party v FUGE',
    location: 'FUGA',
    description: 'Zahrajú DJi Forma, Terna a Deepress.',
    category: 'Party',
    added: false
  }
];

export default function ChystamSaPage() {
  const events = initialEvents.filter(e => e.added);

  return (
    <>
      <div style={{ padding: '2rem 1rem 5rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Chystám sa</h1>
        <h2 style={{ fontSize: '16px', marginTop: '0.5rem', color: '#666' }}>
          Tvoje naplánované eventy
        </h2>

        <div style={{ marginTop: '2rem' }}>
          {events.length === 0 ? (
            <p style={{ color: '#999' }}>Zatiaľ nič nemáš pridané.</p>
          ) : (
            events.map((event) => (
              <div key={event.id} style={{
                marginBottom: '1rem',
                padding: '1.2rem',
                border: '1px solid #eee',
                borderRadius: '10px',
                backgroundColor: '#fff'
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
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
