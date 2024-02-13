import React from "react";
import NavBar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../images/homePage/pexels1.jpg";
import Image2 from "../images/homePage/pexels2.jpg";
import Image3 from "../images/homePage/pexels3.jpg";

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar solo una imagen a la vez
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col min-h-screen bg-white shadow">
      <NavBar />
      {/* Contenedor inferior con carrusel */}
      <div className="flex-grow p-4">
        {/* el classname:"h-96 w-full" son los puntos del carrusel de fotos */}
        <Slider {...sliderSettings} className="h-96 w-full">
          {" "}
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
      </div>
    </div>
  );
};
export default HomePage;
