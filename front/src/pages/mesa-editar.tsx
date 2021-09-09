import {useMenu} from '../contexts/menuContext.tsx';

const MesaEditar = () => {
  const {mesa} = useMenu();

  return(
    <div className='container'>
      <h2>Editar '{mesa?.nome}'</h2>

      <h3>Nome</h3>
      <input type='text'/>

      <h3>Descrição</h3>
      <input type='text'/>
    </div>
  )
}

export default MesaEditar;
