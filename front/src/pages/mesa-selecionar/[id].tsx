import Link from 'next/link';
import {useMenu} from '../../contexts/menuContext.tsx';
import {api} from '../api/api.ts';

const MesaSelecionar = ({mesas}) => {
  const {setMesa} = useMenu();

  return (
    <div>
      {
        mesas.map(mesa => {
          return (
            <Link href="/mesa-menu" key={mesa.id}>
              <button type='button' onClick={() => {
                setMesa(mesa.id);
                alert('Mesa Selecionada');
              }}>{mesa.nome}</button>
            </Link>
          )
        })
      }
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
