import { createContext } from "react";
import { useState, useEffect } from "react";
export const ShopContext = createContext();

export const ShopComponentContext = ({children}) =>{
    const [productos, setProductos] = useState([])  
    const [description,setDescription] = useState([]);
    const [cart, setCart] = useState([])
    const [valor,setValor] = useState(1);
    const [cantidad, setCantidad] = useState();
    const [totalCarrito, setTotalCarrito] = useState(0);


    const vaciarCarrito= ()=>{
        setCart([])
        setTotalCarrito (0)
    }
    const deleteItem =(productos)=>{
let carritoFiltrado = cart.filter(el=> el.itemDetalle.id !== productos)
setCart(carritoFiltrado); 

let productToDelete = cart.find(el => el.itemDetalle.id === productos)
let priceToSubstract = productToDelete.itemDetalle.price * productToDelete.cantidadContext
setTotalCarrito(totalCarrito - priceToSubstract)
    }
  

    useEffect( () => {
        fetch("/Productos.json")
        .then(response => response.json())
        .then(data =>{
            setProductos(data)
              
              })
            },[])
 

    return <ShopContext.Provider value={{productos,setProductos,description,setDescription,cart,setCart,valor,setValor,cantidad,setCantidad,totalCarrito,setTotalCarrito, vaciarCarrito,deleteItem}}>
        {children}
    </ShopContext.Provider>
}