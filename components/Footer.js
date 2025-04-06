import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.css";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === '/' ? styles.active : styles.link}>DNESKA</a>
      </Link>
      <Link href="/chystam-sa" legacyBehavior>
        <a className={router.pathname === '/chystam-sa' ? styles.active : styles.link}>Chystám sa</a>
      </Link>
      <Link href="/nastavenia" legacyBehavior>
        <a className={router.pathname === '/nastavenia' ? styles.active : styles.link}>Nastavenia</a>
      </Link>
    </footer>
  );
}
