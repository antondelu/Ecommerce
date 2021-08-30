import Img from "./videoReloj.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";


export const ImgPor=()=> {
    return(
       
        <header className="header">
            <video src={Img} className="vid-bg" playsinline autoPlay muted loop></video>
            <div class="banner-text">
           
             <button  className="contactButton"><Link to={{hash: "#con"}}/> Contacto</button> <br /><br />
             <FontAwesomeIcon className="down" icon={faAngleDoubleDown}/>
         </div>
        </header>
    
        
        
    )
};