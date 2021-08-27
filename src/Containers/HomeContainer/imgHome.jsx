import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBell,
  faShoppingCart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Homecard } from "./Homecard";
import { Link } from "react-router-dom";

export const ImgHome = () => {
  return (
    <div className="container">
      {Homecard.map((item) => {
        return (
          <div className="container">
            <div className="card">
              <div className="imgBx">
                <img src={item.img} alt="img" />
                <ul className="action">
                  <li>
                    <Link to="/cart">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <span>Agregar al carrito</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <FontAwesomeIcon icon={faBell} />
                      <span>Notificaciones</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/productos">
                      <FontAwesomeIcon icon={faEye} />
                      <span>Ver mas</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="contents">
                <div className="productName">
                  <h3 className="titleCard">{item.title}</h3>
                </div>
                <div className="priceRating">
                  <h2>{item.price}</h2>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
