import Link from 'next/link';
import {useMenu} from '../../contexts/menuContext.tsx';
import {api} from '../api/api.ts';


const selecionaPersonagem = ({jogadores}) => {
  const {acao, mesa, setCurrentJogador, userId} = useMenu();

  const renderPlayers = () => {
    if(acao === 'Editar') return jogadoresRadio();
    return jogadoresCheck();
  }

  const jogadoresRadio = () => {
    return (jogadores.map(jogador => {
      return (<div key={jogador.id}>
        <input id={jogador.id} onClick={jogadorClick} value={jogador.id} type="radio" name="jogadores"/>
        <label htmlFor={jogador.id}>{jogador.nome}</label>
      </div>
      )
    }));
  }

  const jogadoresCheck = () => {
    return (jogadores.map(jogador => {
      return (<div key={jogador.id}>
        <input id={jogador.id} onClick={jogadorClick} value={jogador.id} type="checkbox" name="jogadores"/>
        <label htmlFor={jogador.id}>{jogador.nome}</label>
      </div>
      )
    }));
  }

  function jogadorClick(e) {
    setCurrentJogador(e.target.value);
  }


  return(
    <div className='container'>
      <h2>Selecionar</h2>
      {renderPlayers()}
      <Link href={`../personagem/${userId}`}>
        <button type='button'>Selecionar</button>
      </Link>
    </div>
  )
}

export default selecionaPersonagem

export const getStaticPaths = async () => {
return {
  paths: [],
  fallback: 'blocking'
}
}

export async function getStaticProps(ctx){
  const {id} = ctx.params;
  const {data} = await api.get(`/jogador/mesa/${id}`);
  const jogadores = data.map(jogador => {
    return(
      {
        id: jogador.id,
        nome: jogador.nomePersonagem
      }
    )
  });

  return {
    props: {
      jogadores
    }
  }
}
