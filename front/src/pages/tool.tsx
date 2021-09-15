import {useRouter} from 'next/router';


export default function Tool() {
  const router = useRouter();

  return(
      <div className='container'>
        <h2>Tela principal</h2>
        <h3>Algum texto sobre a ferramenta</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src='rpg-468920_1920.jpg'/>
      </div>
  );
}
