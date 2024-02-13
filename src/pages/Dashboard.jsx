import React from "react";
import Image from "../images/imghome/Logo15.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const BarraVenta = () => {

  return (
    <div style={{ backgroundColor: "white", borderBottom: "1px solid black", textAlign: "justify", width: "100%", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px" }}>
      {/* Sección izquierda de la barra, incluye el logo y el botón de menú */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Image} alt="Logo" style={{ marginRight: "10px" }} />
        <button style={{ border: "none", background: "none", marginRight: "10px" }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div style={{ fontSize: "20px" }}>Community Lab Alliance</div>
      </div>
      {/* Sección derecha de la barra, incluye el campo de búsqueda y los botones de notificaciones y mensajes */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Campo de búsqueda */}
        <div style={{ border: "1px solid black", borderRadius: "5px", marginRight: "400px", marginLeft: "auto" }}>
          <input type="text" placeholder="Search here" style={{ border: "none", background: "none", outline: "none", padding: "5px" }} />
          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {/* Botón de notificaciones */}
        <button style={{ border: "none", background: "none", marginRight: "1px", marginLeft: "1px" }}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        {/* Botón de mensajes */}
        <button style={{ border: "none", background: "none", marginRight: "50px", marginLeft: "1px" }}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>
    </div>
  );
}

export default BarraVenta;


