import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from '../ItemDetail/ItemDetail.jsx'
export const ItemDetailContainer = (props) => {
    const [description,setDescription] = useState([]);
    let {id}= useParams()
   useEffect (()=>{
   fetch("/Productos.json")
   .then(response => response.json())
   .then (data =>{
console.log(data)
 
const itemId = data.find (element => element.id == id)
 setDescription(itemId);


   }) 
},[id])

return(
    <>{
    !!Object.keys(description).length
          ? <ItemDetail item={description} />   
          : <h1>Loading...</h1>}
    </>
)
}