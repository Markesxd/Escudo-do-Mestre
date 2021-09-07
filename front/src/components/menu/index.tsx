import styles from './styles.module.scss';
import Link from 'next/link';
import {useMenu} from '../../contexts/menuContext.tsx';

const Menu = () => {
  const {userId} = useMenu();

  return(
    <div className={styles.container}>
      <h2>Menu</h2>
      <Link href={`/batalha-menu/${userId}`}>
        <button type='button'>Batalha</button>
      </Link>
      <Link href='/mesa-menu'>
        <button type='button'> Menu das Mesas</button>
      </Link>
      <Link href={`/cadastro-personagem/${userId}`}>
        <button type='button'>Cadastrar Personagem</button>
      </Link>
    </div>
  );
}

export default Menu;
