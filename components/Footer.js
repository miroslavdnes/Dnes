
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const activeStyle = { fontWeight: 'bold', textDecoration: 'underline' };

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#fff',
      borderTop: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0.8rem 0',
      fontSize: '14px'
    }}>
      <Link href="/" style={router.pathname === '/' ? activeStyle : null}>
        🏠 DNESKA
      </Link>
      <Link href="/mapa" style={router.pathname === '/mapa' ? activeStyle : null}>
        🗺️ Mapa
      </Link>
    </footer>
  );
}
