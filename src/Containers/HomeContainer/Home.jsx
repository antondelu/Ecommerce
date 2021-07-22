import { Link } from "react-router-dom"
import {ImgPor} from "../../Components/Portada/PortadaImg.jsx"
import { ImgHome } from "./imgHome.jsx";
import {Homecard} from "./Homecard.js";
import {Reloj} from './relojHome/relojHome.jsx'

export const Home = ()=>{
    return(
      <>
        <ImgPor/>
        <Reloj/>
           
        {Homecard.map((item)=>{
          return (
            
     <div className={item.class}>
<div class="container card mb-3 caja" key= {item.href}>
    <div class="row g-0">
      <div class="col-md-4">
        <ImgHome/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text"> {item.description} </p>
        </div>
      </div>
    </div>
  </div>
  </div>
          )
      })}
      
        </>
    )
}