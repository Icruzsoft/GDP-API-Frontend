import Image18 from "../../images/imghome/ArtiR1.jpg";
import Image19 from "../../images/imghome/ArtiR2.jpg";
import Image20 from "../../images/imghome/ArtiR3.jpg";
const RecentArticles = () => {
  return (
    <div>
      <center>
        <h1 className="h1-darkGreen">Artículos Recientes</h1>
      </center>
      <br />
      <center>
        <div className="backg-cont">
          {/* First image with text */}
          <div className="cont-img">
            <img src={Image18} alt="ArtiR1" className="img-arc" />
            <p className="p-brown">
              La Importancia de la Automatización en las Empresas
            </p>
          </div>
          {/* Second image with text */}
          <div className="cont-img">
            <img src={Image19} alt="ArtiR2" className="img-arc" />
            <p className="p-brown">¿Qué es Asana y para qué sirve?</p>
          </div>
          {/* Third image with text */}
          <div className="cont-img">
            <img src={Image20} alt="ArtiR3" className="img-arc" />
            <p className="p-brown">
              La Importancia del Diseño de Museografía Científica
            </p>
          </div>
        </div>
      </center>
    </div>
  );
};
export default RecentArticles;
