import {useRouter} from 'next/router';
import Batalha from '../components/batalha';


export default function Tool() {
  const router = useRouter();

  return(
      <>
        <h2>Menu de Batalha</h2>
        <Batalha/>
      </>
  );
}
