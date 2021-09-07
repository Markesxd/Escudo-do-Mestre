import Link from 'next/link';
import {useMenu} from '../contexts/menuContext.tsx';

const MesaMenu = () => {
  const {userId} = useMenu();

  return (
    <div className='container'>
      <h2>Menu das Mesas</h2>
      <Link href='/cadastro-mesa'>
        <button type='button'>Cadastrar</button>
      </Link>
        <button type='button'>Deletar</button>
        <button type='button'>Editar</button>
      <Link href={`/mesa-selecionar/${userId}`}>
        <button type='button'>Selecionar</button>
      </Link>
    </div>
  )
}

export default MesaMenu;
