import {createContext, useState, useContext} from 'react';

export const MenuContext = createContext();

export default function MenuContextProvider ({children}){
  const [userId, setUserId] = useState(-1);

  function setUser(id){
    setUserId(id);
  }

  return (
    <MenuContext.Provider value={{
      userId,
      setUser
    }}>
    {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {return useContext(MenuContext)};
