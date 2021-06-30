import React from "react";


export const ItemDetail = (props) => {
 return(
     <div>

<div class="fullwidth">
          <div class="gallery">
          <figure class="item">
          <div className="img-wrap">
     <img className="img" src={props.item.sprites.back_default} alt="" />
     </div>
      <figcaption class="caption">
      <h1>{props.item.name}</h1>
          <a  href="#">{props.item.height}</a><br />
          <a class="btn-details" href="#">{props.item.weight}</a>
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
 )
};