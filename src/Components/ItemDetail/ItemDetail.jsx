import React from "react";
import { useState,useContext } from "react";
import { ItemCount } from "../Count/Itemcount";
import {But} from "../Item/button.jsx"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/cartContext.jsx";
import {cart} from "../Cart/Cart.jsx"

export const ItemDetail = (props) => {
  const estadoGlobal = useContext (ShopContext)
  const [compra, setCompra] = useState(true);
  const [cantidad, setCantidad] = useState();
  const updateCantidad = (event) => {

    setCantidad(parseInt(event.target.value))
    console.log(cantidad)
}
const agregarCarrito = (event) => {
  let itemDetalle = estadoGlobal.description
  let itemAgregado = {itemDetalle, cantidad}
  const buscador = estadoGlobal.cart.find(producto => producto.itemDetalle.id == itemDetalle.id)
  if(buscador){
      if(itemDetalle === buscador.itemDetalle){
          console.log(itemAgregado.cantidad)
         
          estadoGlobal.setCart([...estadoGlobal.cart, itemAgregado])
      }else{
          estadoGlobal.setCart([...estadoGlobal.cart, itemAgregado])
      }
      setCompra(false)
  }else{
      estadoGlobal.setCart([...estadoGlobal.cart, itemAgregado])
    }
    setCompra(false)
}

const Comprar = () => {
  // finalizar compra
  console.log('funcionacomprar')
}


  return (
    <div>
      <div class="fullwidth">
        <div className="gallery">
          <figure class="item">
            <div className="img-wrap">
              <img
                className="img"
                src={props.item.img}
                alt=""
              />
            </div>
            <figcaption class="caption">
              <h1>{props.item.name}</h1>
              <p>{props.item.price}</p>
              <br />
              {!!compra
                    ? <div><ItemCount stock={props.stock} initial="1" updateCantidad={updateCantidad}/> <But funcion={agregarCarrito} texto={'Agregar'}/></div>
                    : <Link to="/cart"> <But funcion={Comprar} texto={'Comprar'}/> </Link>
                    }
            </figcaption>
          </figure>
        </div>
      </div>

      {/*
         <h1>{props.item.name}</h1>
         <h1>{props.item.height}</h1>
         <h1>{props.item.weight}</h1>         
        <img src={props.item.sprites.back_default} alt="" /> */}
    </div>
  );
};
