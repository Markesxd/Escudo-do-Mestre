import Link from 'next/link';
import {useMenu} from '../contexts/menuContext.tsx';

const MenuPersonagem = () => {
  const {mesa} = useMenu();
  console.log(mesa);
  return (
    <div className='container'>
      <h2>Menu de Personagens</h2>
      <Link href={`cadastro-personagem/${mesa.id}`}>
        <button type='button'>Cadastrar</button>
      </Link>
      <button type='button'>Editar</button>
      <button type='button'>Deletar</button>
      <button type='button'>Mover de Mesa</button>
      <button type='button'>Copiar Para Outra Mesa</button>
    </div>
  );
}

export default MenuPersonagem;
