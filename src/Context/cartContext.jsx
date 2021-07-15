import { createContext } from "react";
import { useState, useEffect } from "react";
export const ShopContext = createContext();

export const ShopComponentContext = ({children}) =>{
    const [productos, setProductos] = useState([])  
    const [description,setDescription] = useState([]);
    const [cart, setCart] = useState([])
    const [valor,setValor] = useState(1);
    const [cantidad, setCantidad] = useState();

    useEffect( () => {
        fetch("/Productos.json")
        .then(response => response.json())
        .then(data =>{
            setProductos(data)
              
              })
            },[])
 

    return <ShopContext.Provider value={{productos,setProductos,description,setDescription,cart,setCart,valor,setValor,cantidad,setCantidad}}>
        {children}
    </ShopContext.Provider>
}