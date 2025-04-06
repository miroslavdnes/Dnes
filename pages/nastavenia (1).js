
import Footer from '../components/Footer';

export default function NastaveniaPage() {
  return (
    <>
      <div style={{ padding: '2rem 1rem 6rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Miro</h1>

        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '16px', color: '#999', marginBottom: '0.5rem' }}>Nastavenia účtu</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{
              padding: '0.8rem 0',
              borderBottom: '1px solid #eee',
              fontSize: '15px',
              color: '#000'
            }}>
              Zmeniť meno (zatiaľ statické)
            </li>
            <li style={{
              padding: '0.8rem 0',
              borderBottom: '1px solid #eee',
              fontSize: '15px',
              color: '#000'
            }}>
              Notifikácie (čoskoro)
            </li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button style={{
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontSize: '14px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Odhlásiť sa
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
