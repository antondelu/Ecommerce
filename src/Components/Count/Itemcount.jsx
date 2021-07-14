import {useState} from "react"
export const ItemCount = (props) => {
    const [valor,setValor] = useState();
    function suma (){
        if(valor < props.stock){
        setValor(parseInt(valor)+1)
    }}
    function resta (){
        if( valor >0){
        setValor(parseInt(valor)-1)
    }}
    return(
        <div>
            <button class="btn-buy"  onClick={resta}>-</button>
            <input class="count-input" type="number"  min="0" max={props.stock} onChange={props.updateCantidad}/>
            <button  class="btn-buy"  onClick={suma}>+</button>
        </div>
    
    )
  } ;
  
  