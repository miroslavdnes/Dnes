import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const activeStyle = {
    fontWeight: 'bold',
    color: '#000'
  };

  const linkStyle = {
    color: '#555',
    textDecoration: 'none',
    fontSize: '14px'
  };

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#fff',
      borderTop: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0.8rem 0',
      zIndex: 100
    }}>
      <Link href="/" style={router.pathname === '/' ? { ...linkStyle, ...activeStyle } : linkStyle}>
        🏠 DNESKA
      </Link>
      <Link href="/mapa" style={router.pathname === '/mapa' ? { ...linkStyle, ...activeStyle } : linkStyle}>
        🗺️ Mapa
      </Link>
    </footer>
  );
}
