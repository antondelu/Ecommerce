import {ImgPor} from "../../Components/Portada/PortadaImg.jsx"
import { ImgHome } from "./imgHome.jsx";
import {Homecard} from "./Homecard.js";
import {Reloj} from './relojHome/relojHome.jsx'
import { Link } from "react-router-dom";


export const Home = ()=>{
    return(
      <>
        <ImgPor/>
        <Reloj/>
        {Homecard.map((item)=>{
          return (
      
     <div className={item.class}>
       
<div className="container card mb-3 caja" key= {item.name}>
    <div className="row g-0">
      <div className="col-md-4">
      <Link className="link" to={item.href}> <ImgHome/></Link>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text"> {item.description} </p>
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