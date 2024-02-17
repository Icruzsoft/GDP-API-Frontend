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
import Image10 from "../images/imghome/Logo7.jpg";
import Image11 from "../images/imghome/Logo8.jpg";
import Image12 from "../images/imghome/Logo9.jpg";
import Image13 from "../images/imghome/Logo10.jpg";
import Image14 from "../images/imghome/Logo11.jpg";
import Image15 from "../images/imghome/Logo12.jpg";
import Image18 from "../images/imghome/ArtiR1.jpg";
import Image19 from "../images/imghome/ArtiR2.jpg";
import Image20 from "../images/imghome/ArtiR3.jpg";

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

  const sliderSettingsTwoPerSlide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Mostrar dos imágenes a la vez
    slidesToScroll: 6, // Desplazar dos imágenes a la vez
    autoplay: true,
    autoplaySpeed: 3000 // Cambia la imagen cada 2 segundos
  };

  const sliderSettingsThreePerSlide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mostrar dos imágenes a la vez
    slidesToScroll: 4, // Desplazar dos imágenes a la vez
    autoplay: true,
    autoplaySpeed: 3000 // Cambia la imagen cada 2 segundos
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
        {/* segundo carrusel */}
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
        </div>
      </div>
      <div className="flex flex-col bg-white shadow">
        <br />
        <br />
        {/* Img de brindo y busco soluciones */}
        <div className="flex justify-center mt-8">
          <img src={Image16} alt="Logo 13" />
        </div>
        <br />
        <br />
        <center>
          <h1 style={{ color: "#B3D433", fontSize: "30px" }}>¿Cómo funciona?</h1> <br/> 
          <p style={{ color: "black", fontSize: "22px" }}>Somos la única plataforma en español que conecta,gestiona y capacita equipos freelance para ofrecer
            <br/> soluciones integrales para empresas
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
        <div style={{ backgroundColor: "rgba(242, 242, 242, 0.9)", width: "100%", height: "540px", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}> 
          {/* Texto de testimonios */}
          <h1 style={{ color: "#013A51", fontSize: "35px", marginBottom: "20px" }}>Testimonios</h1>
          {/* Rectángulo personalizado */}
          <div style={{ backgroundColor: "rgba(242, 242, 242, 0.9)", width: "56%", height: "400px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {/* Columna 1 */}
            <div style={{ width: "50%", marginBottom: "20px", textAlign: "center" }}>
              <h2 style={{ color: "#1F76B7", fontSize: "18px", marginBottom: "20px", fontStyle: "italic" }}>“Aprendí que no quiero ser programadora toda la vida pero que saber sobre Tecnología me va a ayudar en lo que sea que haga”</h2>

              <p style={{ color: "#B3D433", fontSize: "18px", marginBottom: "20px" }} >(Belém, estudiante de preparatoria)</p>

              <p style={{ color: "#1F76B7", fontSize: "18px", marginBottom: "20px", fontStyle: "italic" }} >“En este equipo entendí que un científico también puede trabajar fuera del laboratorio y que los ingenieros necesitan aprender más sobre negocios y mercadotecnia”.</p>
              
              <p style={{ color: "#B3D433", fontSize: "18px", marginBottom: "20px" }}> (Francisco- Freelance)</p>
            </div>
            {/* Columna 2 */}
            <div style={{ width: "50%", marginBottom: "20px", textAlign: "center" }}>
              <h2 style={{ color: "#1F76B7", fontSize: "18px", marginBottom: "20px", fontStyle: "italic" }} >“Gracias a su programa de digitalización tenemos mejor control de nuestros 
                procesos y documentos, eso nos va a ayudar a crecer más”.</h2>

              <p style={{ color: "#B3D433", fontSize: "18px", marginBottom: "20px" }} >(Ivett, empleada en agencia de viajes)</p>

              <p style={{ color: "#1F76B7", fontSize: "18px", marginBottom: "20px", fontStyle: "italic" }} >“Los productos que adquirimos en el marketplace de Community Lab Alliance son mejores cada día”.</p>
              
              <p style={{ color: "#B3D433", fontSize: "18px", marginBottom: "20px" }} >(Fabian- Gerente en empresa de electrocomponentes)</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <center>
          <h1 style={{ color: "#B3D433", fontSize: "35px" }}>Aliados</h1>   
        </center>

        {/* Tercer carrusel */}
        <div className="flex justify-center mt-8">
          <Slider {...sliderSettingsThreePerSlide} className="w-full max-w-screen-lg">
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
        </div>
        <br/>
        <br/>
        <br/>
        <center>
          <h1 style={{ color: "#003169", fontSize: "35px" }}>Artículos Recientes</h1>   
        </center><br/>

        {/* Rectángulo personalizado 2 */}
        <center>
          <div style={{ backgroundColor: "rgba(242, 242, 242, 0.9)", width: "75%", minHeight: "500px", display: "flex", justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Primera imagen con texto */}
            <div style={{ flex: "1", display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <img src={Image18} alt="ArtiR1" style={{ maxWidth: "200px", height: "auto", marginRight: "20px" }} />
              <p style={{ color: "#333", fontSize: "16px" }}>La Importancia de la Automatización en las Empresas</p>
            </div>
            {/* Segunda imagen con texto */}
            <div style={{ flex: "1", display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <img src={Image19} alt="rtiR2" style={{ maxWidth: "200px", height: "auto", marginRight: "20px" }} />
              <p style={{ color: "#333", fontSize: "16px" }}>¿Qué es Asana y para qué sirve?</p>
            </div>
            {/* Tercera imagen con texto */}
            <div style={{ flex: "1", display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <img src={Image20} alt="ArtiR3" style={{ maxWidth: "200px", height: "auto", marginRight: "20px" }} />
              <p style={{ color: "#333", fontSize: "16px" }}>La Importancia del Diseño de Museografía Científica</p>
            </div>
          </div>
        </center>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
