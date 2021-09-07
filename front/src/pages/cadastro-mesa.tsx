import {useRef} from 'react';
import {useMenu} from '../contexts/menuContext.tsx';
import {api} from './api/api.ts';

const CadastroMesa = () => {
  const {userId} = useMenu();
  const nomeRef = useRef();
  const descricaoRef = useRef();

  const addMesa = () => {
    api.post('/mesa/',{
        mestre: userId,
        nome: nomeRef.current.value,
        descricao: descricaoRef.current.value
      }
    )
    .then((resolve) => alert('Mesa cadastrada com sucesso'))
    .catch((reject) => console.log('Ocoreu algum erro'));
  }

  return(
    <div>
      <h2>Cadastre sua Mesa</h2>
      <h3>Nome</h3>
      <input type='text' ref={nomeRef}/>
      <h3>descrição</h3>
      <input type='text' ref={descricaoRef}/><br/>
      <button type='button' onClick={addMesa}>Cadastrar</button>
    </div>
  );
}

export default CadastroMesa
