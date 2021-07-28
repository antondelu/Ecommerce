import React from "react";
import { ItemCount } from "../Count/Itemcount";
import { Link } from "react-router-dom";
import {useState,useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../../Context/cartContext.jsx";

const Card = () => {
const estadoGlobal = useContext(ShopContext)
const [products, setProducts] = useState(estadoGlobal.productos);
let { category } = useParams();
  

  useEffect( () => {

              const productsToShow = estadoGlobal.productos.filter( element => element.categoria == category)
              console.log(productsToShow)
              
              !category 
              ? setProducts(estadoGlobal.productos)
              : setProducts(productsToShow)
          
          },[category])
    return(
  products.map((compo) => {
      return (
 
          <div className="gallery">
          <figure className={compo.class}>
                  <div className="img-wrap">
                <img className="img" src={compo.img} alt="" />
                </div>
                <figcaption className="caption">
                <h3>{compo.name}</h3>
                <p>$ {compo.price}</p>
               <br/>
                <button className="button"><Link to={`/item/${compo.id}`}>Ver mas</Link> </button>
              </figcaption>
            </figure>
            </div>
      
      )
    }))
  
};

export default Card;
