import React from "react";
import { useState,useContext } from "react";
import { ItemCount } from "../Count/Itemcount";
import {But} from "../Item/button.jsx"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/cartContext.jsx";

export const ItemDetail = (props) => {
  const estadoGlobal = useContext (ShopContext)
  const [compra, setCompra] = useState(true);
  const updateCantidad = (event) => {

    estadoGlobal.setCantidad(estadoGlobal.valor)
    estadoGlobal.setValor(1)
}
const agregarCarrito = (event) => {
  updateCantidad(); 
   let itemDetalle = estadoGlobal.description
  let cantidadContext = estadoGlobal.valor
  let itemAgregado = {itemDetalle, cantidadContext}
  const buscador = estadoGlobal.cart.find(producto => producto.itemDetalle.id == itemDetalle.id)
  if(buscador){
      if(itemDetalle === buscador.itemDetalle){
        estadoGlobal.setTotalCarrito(estadoGlobal.totalCarrito + estadoGlobal.cantidad * itemDetalle.price)
        buscador.cantidadContext += estadoGlobal.cantidad
      }else{
          estadoGlobal.setCart([...estadoGlobal.cart, itemAgregado])
          estadoGlobal.setTotalCarrito(estadoGlobal.totalCarrito + cantidadContext * itemDetalle.price)

      }
      setCompra(false)
  }else{
    console.log(itemAgregado)
    console.log(estadoGlobal.totalCarrito,cantidadContext,itemDetalle.price)
      estadoGlobal.setCart([...estadoGlobal.cart, itemAgregado])
      estadoGlobal.setTotalCarrito(estadoGlobal.totalCarrito + cantidadContext * itemDetalle.price)
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
              {
              !!compra
                    ? <div><ItemCount stock={props.stock} initial="1" /> <But funcion={agregarCarrito} texto={'Agregar'}/></div>
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
