import {createContext, useState, useContext} from 'react';

export const MenuContext = createContext();

export default function MenuContextProvider ({children}){
  const [userId, setUserId] = useState(1);
  const [mesa, setMesa] = useState(undefined);

  function setUser(id){
    setUserId(id);
  }

  function setCurrentMesa(mesa){
    setMesa(mesa);
  }

  return (
    <MenuContext.Provider value={{
      userId,
      setUser,
      mesa,
      setCurrentMesa
    }}>
    {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {return useContext(MenuContext)};
