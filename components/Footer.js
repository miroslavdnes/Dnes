import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === '/' ? styles.active : styles.link}>DNESKA</a>
      </Link>
      <Link href="/mapa" legacyBehavior>
        <a className={router.pathname === '/mapa' ? styles.active : styles.link}>Mapa</a>
      </Link>
    </footer>
  );
}
