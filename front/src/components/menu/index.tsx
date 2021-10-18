import styles from './styles.module.scss';
import Link from 'next/link';
import {useMenu} from '../../contexts/menuContext.tsx';

const Menu = () => {
  const {userId, mesa} = useMenu();

  return(
    <div className={userId?styles.container:'hidden'}>
      <h2>Menu</h2>
      <h3>{mesa?`Mesa: '${mesa.nome}'`:"Nenhuma mesa selecionada"}</h3>
      <Link href='/mesa-menu'>
      <button type='button'>Mesas</button>
      </Link>
      <Link href={`/batalha-menu/${userId}`}>
        <button type='button' className={mesa?'':'hidden'}>Batalha</button>
      </Link>
      <Link href={`/menu-personagem`}>
        <button type='button' className={mesa?'':'hidden'}>Personagens</button>
      </Link>
    </div>
  );
}

export default Menu;
