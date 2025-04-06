
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultEvents = [
  {
    id: 1,
    time: '19:00',
    title: 'Koncert v Novej Cvernovke',
    location: 'Nová Cvernovka',
    description: 'Naší Kraj odohrajú svoj nový album naživo.',
    category: 'Hudba'
  },
  {
    id: 2,
    time: '22:00',
    title: 'Techno party v FUGE',
    location: 'FUGA',
    description: 'Zahrajú DJi Forma, Terna a Deepress.',
    category: 'Party'
  },
  {
    id: 3,
    time: '19:30',
    title: 'Akustický večer v Kompót Kaviarni',
    location: 'Kompót Kaviareň',
    description: 'Príďte si užiť chill hudbu od miestnych umelcov.',
    category: 'Hudba'
  }
];

const categories = ['Všetko', 'Hudba', 'Party'];

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Všetko');

  useEffect(() => {
    const saved = localStorage.getItem('dneska-events');
    if (saved) {
      setEvents(JSON.parse(saved));
    } else {
      const initialWithAdded = defaultEvents.map(e => ({ ...e, added: false }));
      setEvents(initialWithAdded);
    }
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem('dneska-events', JSON.stringify(events));
    }
  }, [events]);

  const toggleAdded = (id) => {
    const updated = events.map(event =>
      event.id === id ? { ...event, added: !event.added } : event
    );
    setEvents(updated);
  };

  const filteredEvents = selectedCategory === 'Všetko'
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <>
      <div style={{ padding: '2rem 1rem 5rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>DNESKA</h1>
        <h2 style={{ fontSize: '20px', marginTop: '0.5rem' }}>
          Dnes sa deje v Bratislave
        </h2>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                fontSize: '14px',
                padding: '6px 12px',
                borderRadius: '9999px',
                border: '1px solid #ccc',
                backgroundColor: selectedCategory === cat ? '#000' : '#f2f2f2',
                color: selectedCategory === cat ? '#fff' : '#000',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          {filteredEvents.map((event) => (
            <div key={event.id} style={{
              position: 'relative',
              marginBottom: '1rem',
              padding: '1.2rem',
              border: '1px solid #eee',
              borderRadius: '10px',
              backgroundColor: '#fff'
            }}>
              <motion.button
                onClick={() => toggleAdded(event.id)}
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.85 }}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  border: '1px solid #ccc',
                  backgroundColor: event.added ? '#f2f2f2' : '#fff',
                  color: '#000',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  lineHeight: '28px',
                  textAlign: 'center',
                  padding: 0
                }}
                aria-label="Pridať do zoznamu"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={event.added ? 'check' : 'plus'}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {event.added ? '✓' : '+'}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

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
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
