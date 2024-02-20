import React from "react";
import Image from "../images/imghome/Logo15.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faBars, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

=======
import { faSearch, faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Sidebar';
>>>>>>> cf11903dcf03fbe8f08783568b441bce7f5d8a70

const BarraVenta = () => {

  return (
    <div style={{ backgroundColor: "white", borderBottom: "1px solid black", textAlign: "justify", width: "100%", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px" }}>
      {/* Sección izquierda de la barra, incluye el logo y el botón de menú */}
<<<<<<< HEAD
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Image} alt="Logo" style={{ marginRight: "10px" }} />
        <button style={{ border: "none", background: "none", marginRight: "10px" }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div style={{ fontSize: "20px" }}>Community Lab Alliance</div>
=======
      <div style={{ display: "flex", alignItems: "center"}}>
        <img src={Image} alt="Logo" style={{ marginRight: "10px", background: "White"}} />
          <Sidebar/>
        <div style={{ fontSize: "20px", marginLeft: "35px"}}>Community Lab Alliance</div>
>>>>>>> cf11903dcf03fbe8f08783568b441bce7f5d8a70
      </div>
      {/* Sección derecha de la barra, incluye el campo de búsqueda y los botones de notificaciones y mensajes */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Campo de búsqueda */}
<<<<<<< HEAD
        <div style={{ border: "1px solid black", borderRadius: "5px", marginRight: "400px", marginLeft: "auto" }}>
=======
        <div style={{ border: "1px solid black", borderRadius: "5px", marginRight: "150px", marginLeft: "auto" }}>
>>>>>>> cf11903dcf03fbe8f08783568b441bce7f5d8a70
          <input type="text" placeholder="Search here" style={{ border: "none", background: "none", outline: "none", padding: "5px" }} />
          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {/* Botón de notificaciones */}
<<<<<<< HEAD
        <button style={{ border: "none", background: "none", marginRight: "1px", marginLeft: "1px" }}>
=======
        <button style={{ border: "none", background: "none", marginRight: "5px", marginLeft: "1px" }}>
>>>>>>> cf11903dcf03fbe8f08783568b441bce7f5d8a70
          <FontAwesomeIcon icon={faBell} />
        </button>
        {/* Botón de mensajes */}
        <button style={{ border: "none", background: "none", marginRight: "50px", marginLeft: "1px" }}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
<<<<<<< HEAD
=======
        {/* Botón de Perfil */}
        <button style={{ border: "none", background: "none", marginRight: "15px", marginLeft: "1px" }}>
          <FontAwesomeIcon icon={faUser} />
        </button>

>>>>>>> cf11903dcf03fbe8f08783568b441bce7f5d8a70
      </div>
    </div>
  );
}

export default BarraVenta;