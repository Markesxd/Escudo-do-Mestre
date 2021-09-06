import {useRef} from 'react';
import {api} from './api/api.ts';

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

function enviar(){
  for(const el of mesasRef){
    console.log(el.current.checked);
  }
}

  return (
    <div>
      <h2>Cadastrar Personagem</h2>
      <h3>Nome do Jogador</h3>
      <input type='text'/>
      <h3>Nome do Personagem</h3>
      <input type='text'/>
      <h3>Vida</h3>
      <input type='number'/>
      <h3>Classe de Armadura</h3>
      <input type='number'/>
      <h3>Força</h3>
      <input type='number'/>
      <h3>Destreza</h3>
      <input type='number'/>
      <h3>Constituição</h3>
      <input type='number'/>
      <h3>Inteligencia</h3>
      <input type='number'/>
      <h3>Sabedoria</h3>
      <input type='number'/>
      <h3>Carisma</h3>
      <input type='number'/>
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

export async function getStaticProps(){

  const {data} = await api.get('/mesa/');

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
