import Link from 'next/link';
import {useMenu} from '../contexts/menuContext.tsx';

const MenuPersonagem = () => {
  const {mesa, setWhichAcao} = useMenu();

  return (
    <div className='container'>
      <h2>Menu de Personagens</h2>
      <Link href={`personagem/${mesa.id}`}>
        <button type='button' onClick={()=>{setWhichAcao('Cadastrar')}}>Cadastrar</button>
      </Link>
      <Link href={`personagem-selecionar/${mesa.id}`}>
        <button onClick={()=>{setWhichAcao('Editar')}} type='button'>Editar</button>
      </Link>
      <Link href={`personagem-selecionar/${mesa.id}`}>
        <button onClick={()=>{setWhichAcao('Deletar')}} type='button'>Deletar</button>
      </Link>
      <button type='button'>Mover de Mesa</button>
      <button type='button'>Copiar Para Outra Mesa</button>
    </div>
  );
}

export default MenuPersonagem;
