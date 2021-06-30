import {useEffect, useState} from "react"
import {ItemDetail} from '../ItemDetail/ItemDetail.jsx'
export const ItemDetailContainer = (props) => {
    const [description,setDescription] = useState([]);
   useEffect (()=>{
   fetch("https://pokeapi.co/api/v2/pokemon/5")
   .then(response => response.json())
   .then (data =>{
console.log(data.name)
setDescription(data)
console.log(description)

   }) 
},[])

return(
    <>{
    !!Object.keys(description).length
          ? <ItemDetail item={description} />   
          : <h1>Loading...</h1>}
    </>
)
}