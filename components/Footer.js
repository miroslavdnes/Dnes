import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === '/' ? styles.active : styles.link}>🏠 DNESKA</a>
      </Link>
      <Link href="/onas" legacyBehavior>
        <a className={router.pathname === '/onas' ? styles.active : styles.link}>ℹ️ O nás</a>
      </Link>
      <Link href="/kontakt" legacyBehavior>
        <a className={router.pathname === '/kontakt' ? styles.active : styles.link}>📞 Kontakt</a>
      </Link>
    </footer>
  );
}
