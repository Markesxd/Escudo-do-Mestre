import Link from 'next/link';
import {useMenu} from '../../contexts/menuContext.tsx';
import {api} from '../api/api.ts';

const MesaSelecionar = ({mesas}) => {

  const {setCurrentMesa, acao, jogadorId} = useMenu();

  const handleButtons = () => {
    if(acao === "Mover") {
      return(
      mesas.map(mesa => {
        return (
          <Link href="/menu-personagem" key={mesa.id}>
            <button type='button' onClick={() => {
              jogadorId.forEach(id => {
                api.patch(`/jogador/${id}`, {
                  mesa: mesa.id
                })
                .then(() => alert('Jogador movido com sucesso!'))
                .catch((err) => {
                  console.log(err);
                  alert('Algum erro aconteceu');
                })
              });
            }}>{mesa.nome}</button>
          </Link>
        )})
      )
    } else if(acao === 'Copiar'){
      return(
      mesas.map(mesa => {
        return (
          <Link href="/menu-personagem" key={mesa.id}>
            <button type='button' onClick={() => {
              jogadorId.forEach(id => {
                api.get(`/jogador/${id}`)
                .then(({data}) => {
                  const jogador = data;
                  jogador.id = undefined;
                  console.log(jogador);
                  api.post('/jogador', jogador)
                  .then(res => console.log(res))
                  .catch(err => console.log(err));
                })
                .catch((err) => {
                  console.log(err);
                  alert('Algum erro aconteceu');
                })
              });
            }}>{mesa.nome}</button>
          </Link>
        )})
      )

    } else {
      return(
        mesas.map(mesa => {
          return (
            <Link href="/mesa-menu" key={mesa.id}>
            <button type='button' onClick={() => {
              setCurrentMesa(mesa);
              alert('Mesa Selecionada');
            }}>{mesa.nome}</button>
            </Link>
          )
        })
      )
    }
  }

  return (
    <div className="container">
      {handleButtons()}
    </div>
  )
}

export default MesaSelecionar;

export async function getStaticPaths(){
  return{
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(ctx){
  const {id} = ctx.params;

  const {data} = await api.get(`/mesa/${id}`);
  const mesas = data.map(mesa => {
    return{
      id: mesa.id,
      nome: mesa.nome,
      descricao: mesa.descricao
    }
  })

  return{
    props: {mesas}
  }
}
