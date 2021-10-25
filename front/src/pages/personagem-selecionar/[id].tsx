import Link from 'next/link';
import {useMenu} from '../../contexts/menuContext.tsx';
import {api} from '../api/api.ts';


const selecionaPersonagem = ({jogadores}) => {
  const {acao, mesa, setCurrentJogador, userId, jogadorId} = useMenu();

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
    if(acao !== 'Editar') {
      const newList = [...jogadorId];
      if(e.target.checked){
        newList.push(e.target.value);
      } else {
        const i = newList.indexOf(e.target.value);
        newList.splice(i, 1);
      }
      setCurrentJogador(newList);
      return
    }
    setCurrentJogador(e.target.value);
  }

  const deletePlayer = () => {
    jogadorId.forEach(jogador => {
      api.delete(`/jogador/${jogador}`)
      .catch(error => {
        alert("Opa Algo deu errado");
        return
      });
    })
    alert("Jogador(es) excluidos com sucesso");
  }

  const handleButtons = () => {
    console.log(acao)
    if(acao === 'Deletar') return (
      <Link href="/menu-personagem">
        <button type='button' onClick={deletePlayer}>{acao}</button>
      </Link>
    )
    if(acao === 'Mover') return (
      <Link href={`/mesa-selecionar/${userId}`}>
        <button type='button'>{acao}</button>
      </Link>
    )
    if(acao === 'Copiar') return (
      <Link href={`/mesa-selecionar/${userId}`}>
        <button type='button'>{acao}</button>
      </Link>
    )
    return(
      <Link href={`../personagem/${userId}`}>
        <button type='button'>{acao}</button>
      </Link>
    )
  }

  return(
    <div className='container'>
      <h2>Selecionar</h2>
      {renderPlayers()}
      {handleButtons()}
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
