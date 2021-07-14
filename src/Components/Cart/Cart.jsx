import { useContext } from "react/cjs/react.development"
import { ShopContext } from "../../Context/cartContext"

export const Cart  = () => {
    const estadoGlobal = useContext(ShopContext);
    
    let carrito = estadoGlobal.cart;
return(
    

    carrito.map((element)=>{
        return(
<div className="element" key={element.itemDetalle.id}>
    <img className={element.itemDetalle.class} src={element.itemDetalle.img} alt="" />
                      <h1>{element.itemDetalle.name}</h1>
                      <h2>{element.cantidad}</h2>
                    </div>
        )

    })

    )
} 