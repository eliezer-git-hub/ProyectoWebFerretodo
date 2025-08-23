import { createContext, useContext, useState } from 'react'
export const CarritoContext = createContext();

export const UsarContex = ({children}) => {

    const [suma,setSuma]=useState(0);

    const sumarProductos=(producto)=>{
      setSuma(producto+suma);
    }
    const resetProductos=()=>{
      setSuma(0);
    }
  return (
    <CarritoContext.Provider value={{sumarProductos,resetProductos,suma}}>
        {children}
    </CarritoContext.Provider>
  )
}

