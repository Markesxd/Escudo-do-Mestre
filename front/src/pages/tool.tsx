import {useRouter} from 'next/router';
import Menu from '../components/menu';


export default function Tool() {
  const router = useRouter();

  return(
      <>

        <Menu/>
      </>
  );
}
