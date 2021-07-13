import { useContext } from "react/cjs/react.development"
import { ShopContext } from "../../Context/cartContext"

export const Cart  = () => {
    const estadoGlobal = useContext(ShopContext);
    console.log(estadoGlobal.cart)
return(
    <h3 className="carrito">Hola soy el carrito !!</h3>

    )
} 