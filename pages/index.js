
import React, { useState } from 'react';

const events = [
  {
    title: 'FVLCRVM @ Pink Whale',
    time: '21:00',
    category: 'Hudba',
    location: 'Pink Whale, Námestie SNP',
    image: 'https://images.unsplash.com/photo-1551794844-16c3b8147c31'
  },
  {
    title: 'Indie Night v Novej Cvernovke',
    time: '20:00',
    category: 'Hudba',
    location: 'Nová Cvernovka',
    image: 'https://images.unsplash.com/photo-1515169067865-5387a5fc5c3a'
  },
  {
    title: 'Kávový festival na Miletičke',
    time: '10:00 – 18:00',
    category: 'Káva',
    location: 'Trhovisko Miletičova',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348'
  },
  {
    title: 'Loft Party by Basshunters',
    time: '23:30',
    category: 'Party',
    location: 'Secret Location, Bratislava',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20'
  }
];

const categories = ['Všetko', 'Hudba', 'Káva', 'Party'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Všetko');

  const filteredEvents = selectedCategory === 'Všetko'
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem', backgroundColor: '#fff' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '1rem' }}>DNESKA</h1>
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '8px 14px',
              borderRadius: '24px',
              border: '1px solid #000',
              backgroundColor: selectedCategory === category ? '#000' : '#fff',
              color: selectedCategory === category ? '#fff' : '#000',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {filteredEvents.map((event, index) => (
          <div key={index} style={{
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <img src={event.image} alt={event.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ margin: 0, fontSize: '18px' }}>{event.title}</h2>
              <p style={{ margin: '0.5rem 0', color: '#777' }}>{event.time} • {event.location}</p>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '8px'
              }}>{event.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
