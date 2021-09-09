import {useRef} from 'react';
import {api} from '../api/api.ts';
import styles from './styles.module.scss';

const BatalhaMenu = ({mesas, jogadores}) => {
  let mesasRefs = [];
  let jogadoresRefs = [];
  const todosJogadoresRef = useRef();

  return(
    <div className='container'>
      <h2>Batalha</h2>
      <h3>Selecione uma mesa</h3>
      {
        mesas.map((mesa, i) => {
          mesasRefs.push(useRef());
          return(
            <div key={mesa.id}>
            <input ref={mesasRefs[i]} onClick={()=>{toggleHiden(mesa.id)}} id={`mesa${mesa.id}`} type='radio' name='mesas' value={mesa.id}/>
            <label htmlFor={`mesa${mesa.id}`}>{mesa.nome}</label>
            </div>
          )
        })
      }
      <div>
        <input id='tds' ref={todosJogadoresRef} type='checkbox'/>
        <label htmlFor='tds'>Mostrar todos os Jogadores</label>
      </div>
      <h3>Selecione Jogadores</h3>
      {
        jogadores.map((jogador, i) => {
          jogadoresRefs.push(useRef());
          return (
            <div className='hidden' key={jogador.id}>
              <input ref={jogadoresRefs[i]} id={`jogador${jogador.id}`} type='checkbox' name='jogadores' value={jogador.id}/>
              <label htmlFor={`jogador${jogador.id}`}>{jogador.nomePersonagem}</label>
            </div>
          );
        })
      }
      <h3>Selecione Monstros</h3>
    </div>
  )
}

export default BatalhaMenu;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(ctx){
  const {id} = ctx.params;

  const {data} = await api.get(`/mesa/${id}`);
  const mesas = data.map(mesa => {
    return({nome: mesa.nome, id: mesa.id})
  });

  const result = await api.get(`/jogador/${id}`);

  const jogadores = result.data.map(jogador => {
    return{
      id: jogador.id,
      nomeJogador: jogador.nomeJogador,
      nomePersonagem: jogador.nomePersonagem,
      mesa: jogador.mesa
    }
  });

  return {
    props: {
      mesas,
      jogadores
    }
  }
}
