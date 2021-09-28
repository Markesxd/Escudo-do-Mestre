import {createContext, useState, useContext} from 'react';

export const MenuContext = createContext();

export default function MenuContextProvider ({children}){
  const [userId, setUserId] = useState(1);
  const [mesa, setMesa] = useState();
  const [acao, setAcao] = useState();
  const [jogadorId, setJogadorId] = useState();

  function setUser(id){
    setUserId(id);
  }

  function setCurrentMesa(mesa){
    setMesa(mesa);
  }

  function setWhichAcao(acao) {
    setAcao(acao);
  }

  function setCurrentJogador(jogador){
    setJogadorId(jogador);
  }

  return (
    <MenuContext.Provider value={{
      userId,
      setUser,
      mesa,
      setCurrentMesa,
      acao,
      setWhichAcao,
      jogadorId,
      setCurrentJogador
    }}>
    {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {return useContext(MenuContext)};
