import { getFirestore } from "../../firebase/cliente"
import { useEffect,useState,useContext} from "react"
import {ShopContext} from "../../Context/cartContext.jsx"
import { Link } from "react-router-dom"



export const Checkout = () =>{
    const [compra, setCompra]= useState()
    const estadoGlobal = useContext(ShopContext)
   
    

    useEffect( () => {
        const DB = getFirestore()
        const COLLECTION = DB.collection("orden")
        COLLECTION.get().then(response=> {
            let ordenes = (response.docs.map( doc =>{ return { ...doc.data(), id: doc.id } } ) ) 
            console.log(ordenes)
            let ordenPorMail = ordenes.filter(el => el.buyer.mail == estadoGlobal.ordenFin.buyer.mail)
            let ultOrden = ordenPorMail[ordenPorMail.length-1]
            setCompra(ultOrden)
            console.log(compra)

        })
  },[]);
  return(
    <div>
        {
            !compra ?
            <h1 className="loading">Cargando</h1>

            : 
            <div className="ordenMail">
        <h1 className="final">Compra finalizada</h1>
        <p><b className="or">Numero de orden:</b>{compra.id}</p>
        <p><b className="or">Nombre:</b>{compra.buyer.name}</p>
        <p><b className="or">Mail:</b>{compra.buyer.mail}</p>
        <p><b className="or">Telefono:</b>{compra.buyer.tel}</p>
            </div>
        }
        <Link className="volver" to="/"><button>Ir al inicio</button></Link>
    </div>

)

  
}