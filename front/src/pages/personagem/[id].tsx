import {useRef} from 'react';
import {api} from '../api/api.ts';
import {useMenu} from '../../contexts/menuContext.tsx';
import Link from 'next/link';

const cadastroPersonagem   = ({mesas}) => {
  const nomeJogadorRef = useRef();
  const nomePersonagemRef = useRef();
  const vidaRef = useRef();
  const caRef = useRef();
  const forcaRef = useRef();
  const destrezaRef = useRef();
  const constituicaoRef = useRef();
  const inteligenciaRef = useRef();
  const sabedoriaRef = useRef();
  const carismaRef = useRef();
  const {userId, mesa, acao, jogadorId} = useMenu();

  function handler(){
    if(acao === 'Editar') return editar();
    if(acao === 'Cadastrar') return cadastrar();
  }

  function editar(){
    api.patch(`/jogador/${jogadorId}`, {
      nomeJogador: nomeJogadorRef.current.value,
      nomePersonagem: nomePersonagemRef.current.value,
      vida: Number(vidaRef.current.value),
      ca: Number(caRef.current.value),
      forca: Number(forcaRef.current.value),
      destreza: Number(destrezaRef.current.value),
      constituicao: Number(constituicaoRef.current.value),
      inteligencia: Number(inteligenciaRef.current.value),
      sabedoria: Number(sabedoriaRef.current.value),
      carisma: Number(carismaRef.current.value),
      mesa: mesa.id,
      mestre: userId
    })
    .then((resolve) => {console.log(resolve); alert('Personagem editado com sucesso')})
    .catch((reject) => {console.log(reject); alert('algum erro aconteceu')});
  }

  async function cadastrar(){
        api.post('/jogador/', {
          nomeJogador: nomeJogadorRef.current.value,
          nomePersonagem: nomePersonagemRef.current.value,
          vida: Number(vidaRef.current.value),
          ca: Number(caRef.current.value),
          forca: Number(forcaRef.current.value),
          destreza: Number(destrezaRef.current.value),
          constituicao: Number(constituicaoRef.current.value),
          inteligencia: Number(inteligenciaRef.current.value),
          sabedoria: Number(sabedoriaRef.current.value),
          carisma: Number(carismaRef.current.value),
          mesa: mesa.id,
          mestre: userId
        })
        .then((resolve) => alert('Personagem cadastrado com sucesso'))
        .catch((reject) => alert('algum erro aconteceu'));
  }

    return (
      <div className="container">
        <h2>{acao} Personagem</h2>
        <h3>Nome do Jogador</h3>
        <input ref={nomeJogadorRef} type='text'/>
        <h3>Nome do Personagem</h3>
        <input ref={nomePersonagemRef} type='text'/>
        <h3>Vida</h3>
        <input ref={vidaRef} type='number'/>
        <h3>Classe de Armadura</h3>
        <input ref={caRef} type='number'/>
        <h3>Força</h3>
        <input ref={forcaRef} type='number'/>
        <h3>Destreza</h3>
        <input ref={destrezaRef} type='number'/>
        <h3>Constituição</h3>
        <input ref={constituicaoRef} type='number'/>
        <h3>Inteligencia</h3>
        <input ref={inteligenciaRef} type='number'/>
        <h3>Sabedoria</h3>
        <input ref={sabedoriaRef} type='number'/>
        <h3>Carisma</h3>
        <input ref={carismaRef} type='number'/>
        <Link href="/menu-personagem">
          <button type='button' onClick={handler}>{acao}</button>
        </Link>
      </div>
    )
  }

  export default cadastroPersonagem;

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
      return(
        {
          id: mesa.id,
          nome: mesa.nome

        }
      )
    });

    return {
      props: {
        mesas
      }
    }
}
