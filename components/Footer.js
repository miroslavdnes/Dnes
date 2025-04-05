import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  const baseStyle = {
    color: '#555',
    textDecoration: 'none',
    fontSize: '14px'
  };

  const activeStyle = {
    color: '#000',
    fontWeight: 'bold'
  };

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#fff',
      borderTop: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '1rem 0',
      zIndex: 100
    }}>
      <Link href="/" passHref>
        <a style={router.pathname === '/' ? { ...baseStyle, ...activeStyle } : baseStyle}>🏠 DNESKA</a>
      </Link>
      <Link href="/mapa" passHref>
        <a style={router.pathname === '/mapa' ? { ...baseStyle, ...activeStyle } : baseStyle}>🗺️ Mapa</a>
      </Link>
    </footer>
  );
}
