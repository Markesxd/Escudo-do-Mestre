import styles from './styles.module.scss';
import Link from 'next/link';

export default function Header() {
  return(
    <header className={styles.container}>
      <Link href='/tool'>
        <h1 className={styles.mainTitle}>Escudo do Mestre</h1>
      </Link>
    </header>
  )
}
