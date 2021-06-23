import React from "react";
import { Productos } from "./Productos";
import { ItemCount } from "../Count/Itemcount";

const Card = () => {
    return(
    Productos.map((compo) => {
      return (
        <div class="fullwidth">
          <div class="gallery">
          <figure className={compo.class}>
                  <div className="img-wrap">
                <img className="img" src={compo.img} alt="" />
                </div>
                <figcaption className="caption">
                <h3>{compo.name}</h3>
                <p>{compo.price}</p>
                <ItemCount stock="10" initial="1" />
               <br/>
                <a className="btn-details" href="#">
                  Agregar
                </a>
              </figcaption>
            </figure>
            </div>
          </div>
      )
    }))
  
};

export default Card;
