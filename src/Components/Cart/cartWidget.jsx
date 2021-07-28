import { useContext } from "react/cjs/react.development"
import { ShopContext } from "../../Context/cartContext"
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export const Cart  = () => {
const [name, setName] = useState('')
const [tel, setTel] = useState('')
const [ mail,setMail]= useState ('')

    const estadoGlobal = useContext(ShopContext);
    let carrito = estadoGlobal.cart;
  
return(
    <div>
        
    
   { 
 carrito.length ===0
?<Link to="/productos">Tu carrito esta vacio</Link>
  :carrito.map((element)=>{
          return(
<div className="element" key={element.itemDetalle.id}>
    <img className={element.itemDetalle.class} src={element.itemDetalle.img} alt="" />
                      <h1>{element.itemDetalle.name}</h1>
                      <h2>{element.cantidadContext}</h2>
                      <button className="btn-details" onClick={()=>estadoGlobal.deleteQuantity(element.itemDetalle)}>Borrar item </button>
                      <button className="btn-details" onClick={()=>estadoGlobal.deleteItem(element.itemDetalle.id)}>X</button>
                    </div>
                   
        )

    })
    

}
<div>
  <input type="emial" onInput={(e)=> {setMail(e.target.value)}} placeholder="Correo"  required/>
  <input type="tel"  onInput={(e)=> {setTel(e.target.value)}} placeholder="Telefono" required/>
  <input type="text" onInput={(e)=> {setName(e.target.value)}} placeholder="Nombre" required />
</div>

<p className="element">${estadoGlobal.totalCarrito}</p>
<button className="btn-details" onClick={estadoGlobal.vaciarCarrito}>Eliminar compras</button>
<button className="btn-details" onClick={()=>estadoGlobal.crearOrden(name,tel,mail)} >Finalizar compra </button>
</div>

)
 }