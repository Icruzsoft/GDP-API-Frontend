import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SliderOne from "../components/homePage-sliderOne";
import SliderTwo from "../components/homePage-sliderTwo";
import SliderThree from "../components/homePage-sliderThree";
import RecentArticles from "../components/homePage-recentArticles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image16 from "../images/imghome/Logo13.jpg";
import Image17 from "../images/imghome/Logo14.jpg";
import "../styles/homePage.css";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-screen bg-white">
        <NavBar />
        {/* Div examples carousel */}
        <SliderOne />
      </div>
      <div className="flex flex-col bg-white shadow mt-8">
        {/* div allies carousel */}
        <SliderTwo />
      </div>
      <div className="flex flex-col bg-white shadow">
        <br />
        <br />
        {/* contribute and solution image */}
        <div className="flex justify-center mt-8">
          <img src={Image16} alt="Logo 13" />
        </div>
        <br />
        <br />
        <center>
          <h1 className="h1-green">¿Cómo funciona?</h1>
          <p className="p-black">
            Somos la única plataforma en español que conecta, gestiona y
            capacita equipos freelance para ofrecer
            <br /> soluciones integrales para empresas
          </p>
        </center>
        {/* contact image */}
        <div className="flex justify-center mt-8">
          <img src={Image17} alt="Logo 14" />
        </div>
        <br />
        {/* rectangle grey */}
        <div className="rec-testimony">
          {/* Testimony text */}
          <h1 className="h1-darkGreen">Testimonios</h1>
          {/* personal Rectangle */}
          <div className="rec-testimony__newRec">
            {/* Column 1 */}
            <div className="rec-testimony__column">
              <h2 className="h2-darkBlue">
                “Aprendí que no quiero ser programadora toda la vida pero que
                saber sobre Tecnología me va a ayudar en lo que sea que haga”
              </h2>
              <p className="p-lightGreen">
                (Belém, estudiante de preparatoria)
              </p>
              <h2 className="h2-darkBlue">
                “En este equipo entendí que un científico también puede trabajar
                fuera del laboratorio y que los ingenieros necesitan aprender
                más sobre negocios y mercadotecnia”.
              </h2>
              <p className="p-lightGreen"> (Francisco- Freelance)</p>
            </div>
            {/* Column 2 */}
            <div className="rec-testimony__column">
              <h2 className="h2-darkBlue">
                “Gracias a su programa de digitalización tenemos mejor control
                de nuestros procesos y documentos, eso nos va a ayudar a crecer
                más”.
              </h2>
              <p className="p-lightGreen">
                (Ivett, empleada en agencia de viajes)
              </p>
              <h2 className="h2-darkBlue">
                “Los productos que adquirimos en el marketplace de Community Lab
                Alliance son mejores cada día”.
              </h2>
              <p className="p-lightGreen">
                (Fabian- Gerente en empresa de electrocomponentes)
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <center>
          <h1 className="h1-green">Aliados</h1>
        </center>
        {/* div allies logos carousel */}
        <SliderThree />
        <br />
        <br />
        <RecentArticles />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
