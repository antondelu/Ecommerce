import {useContext, useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from '../../Components/ItemDetail/ItemDetail.jsx'
import { ShopContext } from "../../Context/cartContext.jsx"
export const ItemDetailContainer = (props) => {
    const estadoGlobal = useContext (ShopContext)
    console.log(estadoGlobal.productos)
    
    let {id}= useParams()
   useEffect (()=>{

const itemId = estadoGlobal.productos.find (element => element.id == id)
console.log(itemId)
estadoGlobal.setDescription(itemId);
console.log(estadoGlobal.description)
},[id])

return(
    <>   
     <ItemDetail item={estadoGlobal.description}/>   
         
    </>
)
}