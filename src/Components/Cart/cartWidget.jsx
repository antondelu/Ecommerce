import { useContext } from "react/cjs/react.development"
import { ShopContext } from "../../Context/cartContext"

export const Cart  = () => {
    const estadoGlobal = useContext(ShopContext);
    let carrito = estadoGlobal.cart;
    const vaciarCarrito= ()=>{
        estadoGlobal.setCart([])
    }
    const deleteItem =(productos)=>{
let carritoFiltrado = carrito.filter(el=> el.itemDetalle.id !== productos)
estadoGlobal.setCart(carritoFiltrado); 
    }
return(
    <div>
        
    
   { carrito.map((element)=>{

        return(
<div className="element" key={element.itemDetalle.id}>
    <img className={element.itemDetalle.class} src={element.itemDetalle.img} alt="" />
                      <h1>{element.itemDetalle.name}</h1>
                      <h2>{element.cantidadContext}</h2>
                      <button className="btn-details" onClick={()=>deleteItem(element.itemDetalle.id)}>Eliminar esta compra </button>
                    </div>
                   
        )

    })
}
<button className="btn-details" onClick={vaciarCarrito}>Eliminar compras</button>
</div>

    )
} 