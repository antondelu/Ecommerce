import { useContext } from "react";
import { ShopContext } from "../../Context/cartContext";
export const ItemCount = (props) => {
    const estadoGlobal = useContext(ShopContext)
    function suma (){
        if(estadoGlobal.valor < 10){
        estadoGlobal.setValor(parseInt(estadoGlobal.valor)+1)
    }}
    function resta (){
        if( estadoGlobal.valor >0){
        estadoGlobal.setValor(parseInt(estadoGlobal.valor)-1)
    }}
    return(
        <div>
            <button class="btn-buy"  onClick={resta}>-</button>
            <input class="count-input" type="text" value={estadoGlobal.valor}/>
            <button  class="btn-buy"  onClick={suma}>+</button>
        </div>
    
    )
  } ;
  
  