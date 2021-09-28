import {useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {useMenu} from '../contexts/menuContext.tsx';
import {api} from './api/api.ts';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  const {setUser} = useMenu();


  async function login(name, password){
    api.get('usuario/login',{
    params: {
      	login: name,
      	password
      }
    }).then((resolve) => {
      if(resolve.data.id){
        setUser(resolve.data.id);
        router.push('/tool');
      } else {
        alert(resolve.data.message)
      }
    }).catch((reject) => console.log(reject));
  }

  return (
        <div className={styles.container}>
          <h2 className={styles.title}>Login</h2>
          <label>Nome</label>
          <input ref={nameRef} type="text"/>
          <label>Senha</label>
          <input ref={passwordRef} type="password"/>
          <span className={styles.horizontal_container}>
            <button className={styles.buttons} type="button" name="button" onClick={() => login(nameRef.current.value, passwordRef.current.value)}>Logar</button>
          </span>
        </div>
  )
}

export default Home
