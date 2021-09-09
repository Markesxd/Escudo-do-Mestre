import Link from 'next/link';
import {useEffect} from 'react';
import {useMenu} from '../contexts/menuContext.tsx';
import {api} from './api/api.ts';

const MesaMenu = () => {
  const {userId, mesa} = useMenu();


  console.log('mesa: ', mesa)
  return (
    <div className='container'>
      <h2>Menu das Mesas</h2>
      <h3>{mesa?`Mesa '${mesa.nome}' selecionada`:'Nenhuma mesa Selecionada'}</h3>

      <Link href='/cadastro-mesa'>
        <button type='button'>Cadastrar</button>
      </Link>

      <button className={mesa?'':'hidden'} type='button'>Deletar</button>

      <Link href={`/mesa-editar`}>
        <button className={mesa?'':'hidden'} type='button'>Editar</button>
      </Link>

      <Link href={`/mesa-selecionar/${userId}`}>
        <button type='button'>Selecionar</button>
      </Link>
    </div>
  )
}

export default MesaMenu;
