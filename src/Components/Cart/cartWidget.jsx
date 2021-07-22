import { useContext } from "react/cjs/react.development"
import { ShopContext } from "../../Context/cartContext"
import { Link } from "react-router-dom";

export const Cart  = () => {
    const estadoGlobal = useContext(ShopContext);
    let carrito = estadoGlobal.cart;
  
return(
    <div>
        
    
   { 
 carrito.length ==0
?<Link to="/productos">Tu carrito esta vacio</Link>
  :carrito.map((element)=>{
          return(
<div className="element" key={element.itemDetalle.id}>
    <img className={element.itemDetalle.class} src={element.itemDetalle.img} alt="" />
                      <h1>{element.itemDetalle.name}</h1>
                      <h2>{element.cantidadContext}</h2>
                      <button className="btn-details" onClick={()=>estadoGlobal.deleteItem(element.itemDetalle.id)}>Eliminar esta compra </button>
                    </div>
                   
        )

    })
    

}
<p className="element">${estadoGlobal.totalCarrito}</p>
<button className="btn-details" onClick={estadoGlobal.vaciarCarrito}>Eliminar compras</button>
</div>

)
 }