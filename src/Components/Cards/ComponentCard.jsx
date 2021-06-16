import React from "react";
import { Cards } from "./CompoCards";

const Card = () => {
 

    Cards.map((compo) => {
      return (
        <div class="fullwidth">
          <div class="gallery">
            <figure className={compo.class}>
              <figcaption className="caption">
                <h3>{compo.name}</h3>
                <a className="btn-buy" href="#">
                Buy
                </a>
                <a className="btn-details" href="#">
                  See details
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      );
    });
  
};

export default Card;
