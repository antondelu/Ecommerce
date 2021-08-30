import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub,faGooglePlus,faResearchgate} from "@fortawesome/free-brands-svg-icons"


export const Footer = ()=> {
    return(
        <>
        <footer >
     <div className="footerContent">
         <h3 id="con">Contacto</h3>
         <p><FontAwesomeIcon icon={faResearchgate}/> Ubicacion: Montevideo, Uruguay</p>
         <ul className="socials">
             <li><Link to=""><FontAwesomeIcon icon={faLinkedin} /></Link></li>
             <li><Link to=""><FontAwesomeIcon icon={faGithub}/></Link></li>
             <li><Link to=""><FontAwesomeIcon icon={faGooglePlus}/></Link></li>
         </ul>
     </div>
     <div className="footerBottom">
         <p>Derechos reservados By Marco De Luca</p>
     </div>
     </footer>
       </>
    )
}