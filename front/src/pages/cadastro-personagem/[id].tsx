import {useRef} from 'react';
import {api} from '../api/api.ts';
import {useMenu} from '../../contexts/menuContext.tsx';

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
  let mesasRef = [];
  const {userId} = useMenu();

  async function enviar(){
    for(const mesa of mesasRef){
      if(mesa.current.checked){
        console.log(userId);
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
          mesa: mesa.current.value,
          mestre: userId
        })
        .then((resolve) => alert('Personagem cadastrado com sucesso'))
        .catch((reject) => alert('algum erro aconteceu'));

      }
    }
  }

    return (
      <div>
        <h2>Cadastrar Personagem</h2>
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
        <h3>Mesa</h3>
        {
          mesas.map((mesa, i) => {
            mesasRef.push(useRef());

            return(
              <div key={mesa.id}>
                <input id={mesa.id} ref={mesasRef[i]} name='group' value={mesa.id} type='radio'/>
                <label htmlFor={mesa.id}>{mesa.nome}</label>
              </div>
            )
          })
        }
        <button type='button' onClick={enviar}>Cadastrar</button>
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
