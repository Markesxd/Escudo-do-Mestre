import styles from './styles.module.scss';
import Link from 'next/link';

const Menu = () => {
  return(
    <div className={styles.container}>
      <h2>Menu</h2>
      <Link href='/batalha'>
        <button type='button'>Batalha</button>
      </Link>
      <Link href='/cadastro-mesa'>
        <button type='button'> cadastrar Mesa</button>
      </Link>
      <Link href='/cadastro-personagem'>
        <button type='button'>Cadastrar Personagem</button>
      </Link>
    </div>
  );
}

export default Menu;
