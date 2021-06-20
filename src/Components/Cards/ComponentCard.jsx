import React from "react";
import { Productos } from "./Productos";

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
                <a className="btn-buy" href="#">
                Comprar
                </a><br />
                <a className="btn-details" href="#">
                  See details
                </a>
              </figcaption>
            </figure>
            </div>
          </div>
      )
    }))
  
};

export default Card;
