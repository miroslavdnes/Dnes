
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const events = [
  {
    title: 'FVLCRVM @ Pink Whale',
    latitude: 48.145,
    longitude: 17.107
  },
  {
    title: 'Indie Night v Novej Cvernovke',
    latitude: 48.162,
    longitude: 17.134
  },
  {
    title: 'Kávový festival na Miletičke',
    latitude: 48.153,
    longitude: 17.125
  },
  {
    title: 'Loft Party by Basshunters',
    latitude: 48.140,
    longitude: 17.109
  }
];

export default function Mapa() {
  useEffect(() => {
    const map = L.map('map').setView([48.15, 17.12], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    events.forEach(event => {
      L.marker([event.latitude, event.longitude])
        .addTo(map)
        .bindPopup(event.title);
    });
  }, []);

  return (
    <div style={{ fontFamily: 'Arial' }}>
      <h1 style={{ padding: '1rem', fontSize: '24px' }}>DNESKA – Mapa</h1>
      <div id="map" style={{ width: '100%', height: '85vh' }}></div>
    </div>
  );
}
