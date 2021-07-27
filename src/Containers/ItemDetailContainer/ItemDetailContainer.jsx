import {useContext, useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from '../../Components/ItemDetail/ItemDetail.jsx'
import { ShopContext } from "../../Context/cartContext.jsx"
export const ItemDetailContainer = (props) => {
    const estadoGlobal = useContext (ShopContext)
    
    
    let {id}= useParams()
   useEffect (()=>{

const itemId = estadoGlobal.ids.find (element => element.id == id)
estadoGlobal.setDescription(itemId.data());
console.log(itemId)
},[id])

return(
    <>   
     <ItemDetail item={estadoGlobal.description} />   
         
    </>
)
}