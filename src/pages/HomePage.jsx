import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../images/homePage/pexels1.jpg";
import Image2 from "../images/homePage/pexels2.jpg";
import Image3 from "../images/homePage/pexels3.jpg";
import Image4 from "../images/homePage/Logo1.jpg";
import Image5 from "../images/homePage/Logo2.jpg";
import Image6 from "../images/homePage/Logo3.jpg";
import Image7 from "../images/homePage/Logo4.jpg";
import Image8 from "../images/homePage/Logo5.jpg";
import Image9 from "../images/homePage/Logo6.jpg";
import Image16 from "../images/homePage/Logo13.jpg";
import Image17 from "../images/homePage/Logo14.jpg";

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar solo una imagen a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // Cambia la imagen cada 2 segundos
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-screen bg-white">
        <NavBar />
        {/* Contenedor inferior con carrusel */}
        <div className="p-4 bg-white mb-8 overflow-hidden">
          {/* el classname:"h-96 w-full" son los puntos del carrusel de fotos */}
          <Slider {...sliderSettings} className="h-120 w-full m-8">
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

      <div className="flex flex-col bg-white shadow mt-8">
        {/* Fila de imágenes */}
        <div className="flex justify-center w-full">
          <img src={Image4} alt="Los Canastos" className="flex w-24 mt-8" />
          <img src={Image5} alt="A TEMPORE" className="flex w-24 mt-8" />
          <img src={Image6} alt="zena" className="flex w-24 mt-8" />
          <img src={Image7} alt="ABBA logistic" className="flex w-24 mt-8" />
          <img src={Image8} alt="Thermo king" className="flex w-24 mt-8" />
          <img src={Image9} alt="Dulce Noviembre" className="flex w-24 mt-8" />
        </div>
      </div>
      <div className="flex flex-col bg-white shadow">
        <br />
        <br />
        <div className="flex justify-center mt-8">
          <img src={Image16} alt="Logo 13" />
        </div>
        <br />
        <br />
        <center>
          <h1 style={{ color: "green", fontSize: "35px" }}>¿Cómo funciona?</h1>

          <p style={{ color: "black", fontSize: "22px" }}>
            Somos la única plataforma en español que conecta,gestiona y capacita
            equipos freelance para ofrecer
            <br /> soluciones integrales para empresas
          </p>
        </center>
        {/* Imagen de contacto */}
        <div className="flex justify-center mt-8">
          <img src={Image17} alt="Logo 14" />
        </div>
        <br />
        <br />
        <br />
        {/* Rectángulo gris */}
        <div
          style={{
            backgroundColor: "rgba(242, 242, 242, 0.9)",
            width: "100%",
            height: "540px",
            margin: "auto",
          }}
        ></div>

        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
