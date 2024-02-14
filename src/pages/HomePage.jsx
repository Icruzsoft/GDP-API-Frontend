import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../images/pexels1.jpg";
import Image2 from "../images/pexels2.jpg";
import Image3 from "../images/pexels3.jpg";
import Image4 from "../images/imghome/Logo1.jpg";
import Image5 from "../images/imghome/Logo2.jpg";
import Image6 from "../images/imghome/Logo3.jpg";
import Image7 from "../images/imghome/Logo4.jpg";
import Image8 from "../images/imghome/Logo5.jpg";
import Image9 from "../images/imghome/Logo6.jpg";
import Image10 from "../images/imghome/Logo7.jpg";
import Image11 from "../images/imghome/Logo8.jpg";
import Image12 from "../images/imghome/Logo9.jpg";
import Image13 from "../images/imghome/Logo10.jpg";
import Image14 from "../images/imghome/Logo11.jpg";
import Image15 from "../images/imghome/Logo12.jpg";
import Image16 from "../images/imghome/Logo13.jpg";
import Image17 from "../images/imghome/Logo14.jpg";

const NavBar = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar solo una imagen a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500 // Cambia la imagen cada 2 segundos
  };

  const sliderSettingsTwoPerSlide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Mostrar dos imágenes a la vez
    slidesToScroll: 6, // Desplazar dos imágenes a la vez
    autoplay: true,
    autoplaySpeed: 3000 // Cambia la imagen cada 2 segundos
  };

  return (
    <div className="flex flex-col min-h-screen bg-white shadow">
      {/* Contenedor superior con barra de navegación y icono de usuario */}
      <div className="flex items-center h-16 bg-white px-4 border-b">
        {/* Logo y Nombre de la Empresa a la izquierda con el icono de "briefcase" */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBriefcase} className="text-2xl mr-2" />
          <span className="text-2xl">IconoLogo</span>
        </div>
        {/* Navegación y Icono de Usuario a la derecha */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* separación de botones de Navegación */}
          <nav className="flex space-x-4">
            {/* botones de navegación */}
            <NavLink
              to="/Dashboard" // Enlace a la página "Dashboard"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/SolutionsPage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Busco Soluciones
            </NavLink>
            <NavLink
              to="/ContibutePage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Brindo Soluciones
            </NavLink>
            <NavLink
              to="/AboutPage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/BlogPage"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Blog
            </NavLink>
            {/* ... (agregar otros enlaces) */}
          </nav>

          {/* Icono de Usuario */}
          <div>
            <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
          </div>
        </div>
      </div>

      {/* Contenedor inferior con carrusel */}
      <div className="flex-grow p-4">
        {/* el classname:"h-96 w-full" son los puntos del carrusel de fotos */}
        <Slider {...sliderSettings} className="h-45 w-65">
          {/* Ajusta la altura según sea necesario */}
          <div>
            <img src={Image} alt="Image 1" />
          </div>
          <div>
            <img src={Image2} alt="Image 2" />
          </div>
          <div>
            <img src={Image3} alt="Image 3" />
          </div>
          
          {/* Agrega más elementos según sea necesario */}
        </Slider>
      </div>   <br/><br/>

      {/* Cambiar el color y tamaño de las letras */}
      <center>
        <h1 style={{ color: "blue", fontSize: "35px" }}>Algunos de nuestros clientes</h1>   
      </center>
      <br/><br/><br/>

      {/* Segundo carrusel */}
      <div className="flex justify-center mt-8">
        <Slider {...sliderSettingsTwoPerSlide} className="w-full max-w-screen-lg">
            <img src={Image4} alt="Logo 1" className="mx-2" />
            <img src={Image5} alt="Logo 2" className="mx-2" />
            <img src={Image6} alt="Logo 3" className="mx-2" />
            <img src={Image7} alt="Logo 4" className="mx-2" />
            <img src={Image8} alt="Logo 5" className="mx-2" />
            <img src={Image9} alt="Logo 6" className="mx-2" />
            <img src={Image10} alt="Logo 7" className="mx-2" />
            <img src={Image11} alt="Logo 8" className="mx-2" />
            <img src={Image12} alt="Logo 9" className="mx-2" />
            <img src={Image13} alt="Logo 10" className="mx-2" />
            <img src={Image14} alt="Logo 11" className="mx-2" />
            <img src={Image15} alt="Logo 12" className="mx-2" />
      </Slider>
      </div><br/><br/><br/>


      {/* Img de brindo y busco soluciones */}
      <div className="flex justify-center mt-8">
        <img src={Image16} alt="Logo 13" />
      </div><br/><br/><br/><br/>

      <center>
        <h1 style={{ color: "green", fontSize: "35px" }}>¿Cómo funciona?</h1>  

        <p style={{ color: "black", fontSize: "22px" }}>Somos la única plataforma en español que conecta,gestiona y capacita equipos freelance para ofrecer
          <br/> soluciones integrales para empresas
        </p>
      </center>

      {/* Imagen de contacto */}
      <div className="flex justify-center mt-8">
        <img src={Image17} alt="Logo 14" />
      </div>  <br/><br/><br/>

      {/* Rectángulo gris */}
      <div style={{ backgroundColor: "rgba(242, 242, 242, 0.9)", width: "100%", height: "540px", margin: "auto" }}></div>
      <br/><br/><br/>

      
    </div>
  );
};

export default NavBar;


