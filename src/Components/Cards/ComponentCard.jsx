import React from "react";
import { ItemCount } from "../Count/Itemcount";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
const Card = () => {
  const [productos, setProductos] = useState([])
  let { category } = useParams();

  useEffect( () => {
      fetch("/Productos.json")
      .then(response => response.json())
      .then(data =>{
              const productsToShow = data.filter( element => element.category == category )
              console.log(productsToShow)
              
              !category 
              ? setProductos(data)
              : setProductos(productsToShow)
            })
          },[category])
    return(
    productos.map((compo) => {
      return (
 
          <div className="gallery">
          <figure className={compo.class}>
                  <div className="img-wrap">
                <img className="img" src={compo.img} alt="" />
                </div>
                <figcaption className="caption">
                <h3>{compo.name}</h3>
                <p>{compo.price}</p>
                <ItemCount stock="10" initial="1" />
               <br/>
                <button><Link to={`/item/${compo.id}`}>Ver mas</Link> </button>
              </figcaption>
            </figure>
            </div>
      
      )
    }))
  
};

export default Card;
