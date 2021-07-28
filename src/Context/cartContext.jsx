import { createContext } from "react";
import { useState, useEffect } from "react";
import { getFirestore } from "../firebase/cliente";
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
  
const deleteQuantity= (product) =>{
    const buscador = cart.find(el => el.itemDetalle.id == product.id)
    if(buscador && buscador.cantidadContext > 1){
            buscador.cantidadContext -= 1
            setTotalCarrito(totalCarrito - buscador.itemDetalle.price)
    }
    }

    const crearOrden =(name, tel ,mail)=> {
        const orden = { buyer : {name, tel ,mail}, item:cart,total: totalCarrito} 
        const db = getFirestore();
        db.collection("orden").add(orden);
        alert("Gracias por tu compra"+ " " + name)
    }
    useEffect( () => {
       const DB = getFirestore()
       const COLLECTION = DB.collection("productos")
       COLLECTION.get().then(response=> {

        setProductos(response.docs.map( doc =>{ return { ...doc.data(), id: doc.id } } ) ) 
  
              
              })
            },[])
 

    return <ShopContext.Provider value={{productos,setProductos,description,setDescription,cart,setCart,valor,setValor,cantidad,setCantidad,totalCarrito,setTotalCarrito, vaciarCarrito,deleteItem,deleteQuantity,crearOrden}}>
        {children}
    </ShopContext.Provider>
}