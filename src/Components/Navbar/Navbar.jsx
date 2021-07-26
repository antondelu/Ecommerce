import React from "react";
import logo from "../../logo.svg";
import {Menuitems} from "./Menuitems";
import {} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/cartContext";


const Navbar = () => {
  const estadoGlobal = useContext(ShopContext)
  let carrito = estadoGlobal.cart
  let cantidadTotal = 0;

  carrito.forEach(element => {
    cantidadTotal += element.cantidadContext 
  });

  return (
    <nav className='navBar'>
      <ul>
      <li>
          <a href="#index">
            <img className="logo" src={logo} alt="" />
          </a>
        </li>
      {Menuitems.map((item)=>{
          return (
            <li key={item.name}>
            <Link to={item.href}>
              <i  className={item.class}></i>{item.name}

            </Link>
          </li>
          )

      })}

<span class="badge badge-light cant">{cantidadTotal}</span>
 <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorias
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/productos/1" className="dropdown-item">Nueva coleccion </Link>
                            <Link to="/productos/2" className="dropdown-item" >Antig</Link>
                        </div>
                        </li>
      </ul>
    </nav>
    
  
  );
};

export default Navbar;
