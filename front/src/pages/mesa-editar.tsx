import {useMenu} from '../contexts/menuContext.tsx';
import {useRef} from 'react';
import {api} from './api/api.ts';
import Link from 'next/link';

const MesaEditar = () => {

  const {mesa} = useMenu();
  const nomeRef = useRef();
  const descricaoRef = useRef();

  const editarMesa = async () => {
    mesa.nome = nomeRef.current.value;
    mesa.descricao = descricaoRef.current.value;
    await api.patch(`/mesa/${mesa.id}`, {
      nome: mesa.nome,
      descricao: mesa.descricao
    });

  };

  return(
    <div className='container'>
      <h2>Editar '{mesa?.nome}'</h2>

      <h3>Nome</h3>
      <input ref={nomeRef} type='text'/>

      <h3>Descrição</h3>
      <input ref={descricaoRef} placeHolder={mesa.descricao} type='text'/>
      <Link href="/mesa-menu">
        <button type='button' onClick={editarMesa}>Editar</button>
      </Link>
    </div>
  )
}

export default MesaEditar;
