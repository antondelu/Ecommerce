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
?<Link to="/productos" className="cartEmpty">Tu carrito esta vacio 😭</Link>
  :carrito.map((element)=>{
          return(
<div className="element" key={element.itemDetalle.id}>
    <img className="imgCart" src={element.itemDetalle.img} alt="" />
    <button className=" close-container" title="Borrar todo" onClick={()=>estadoGlobal.deleteItem(element.itemDetalle.id)}>X</button>
                          <h1>{element.itemDetalle.name}</h1>
                      <h2>{element.cantidadContext}</h2>
                      <button className="btn-details  daleteQuantity" onClick={()=>estadoGlobal.deleteQuantity(element.itemDetalle)}>Borrar unidad </button>
                    </div>
                   
        )

    })
    

}


<div class="roww">
  <p className="finalizar">Para finalizar su compra, llene sus datos</p>
<span>
    <input class="balloon" id="galaxy" type="text" onInput={(e)=> {setName(e.target.value)}} placeholder="Nombre"  required/><label for="Nombre">Nombre</label>
  </span>
  <span>
    <input class="balloon" id="state" type="email" onInput={(e)=> {setMail(e.target.value)}} placeholder="Correo" /><label for="Correo">Correo</label>
  </span>
  <span>
    <input class="balloon" id="planet" type="tel" onInput={(e)=> {setTel(e.target.value)}} placeholder="Telefono"  /><label for="Telefono">Telefono</label>
  </span>
</div>


<p className="total"> Total : ${estadoGlobal.totalCarrito}</p>
<button className="btn-details buttonCart" onClick={estadoGlobal.vaciarCarrito}>Eliminar compras</button>

<Link to="orden"><button className="btn-details buttonCart" onClick={()=>estadoGlobal.crearOrden(name,tel,mail)} > Finalizar compra </button></Link>
</div>

)
 }