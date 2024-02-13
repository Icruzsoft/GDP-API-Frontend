import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../images/pexels1.jpg';
import Image2 from '../images/pexels2.jpg';
import Image3 from '../images/pexels3.jpg';
import Footer from './Footer';

const NavBar = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar solo una imagen a la vez
    slidesToScroll: 1,
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
          {/* Navegación */}
          <nav className="flex space-x-4">
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
            {/* ... (otros enlaces) */}
          </nav>

          {/* Icono de Usuario */}
          <div>
            <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
          </div>
        </div>
      </div>

      {/* Contenedor inferior con carrusel */}
      <div className="flex-grow p-4">
        <Slider {...sliderSettings} className="h-96 w-full"> {/* Ajusta la altura según sea necesario */}
          <div>
            <img src={Image} alt="Image 3" />
          </div>
          <div>
            <img src={Image2} alt="Image 2" />
          </div>
          <div>
            <img src={Image3} alt="Image 3" />
          </div>
          {/* Agrega más elementos según sea necesario */}
        </Slider>
      </div>
      <Footer/>
    </div>
  );
};

export default NavBar;

