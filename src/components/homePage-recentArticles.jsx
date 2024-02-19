import Image18 from "../images/imghome/ArtiR1.jpg";
import Image19 from "../images/imghome/ArtiR2.jpg";
import Image20 from "../images/imghome/ArtiR3.jpg";

const RecentArticles = () => {
  return (
    <div>
      <center>
        <h1 className="h1-darkGreen">Artículos Recientes</h1>
      </center>
      <br />
      <center>
        <div
          style={{
            backgroundColor: "rgba(242, 242, 242, 0.9)",
            width: "75%",
            minHeight: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Primera imagen con texto */}
          <div
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={Image18}
              alt="ArtiR1"
              style={{
                maxWidth: "200px",
                height: "auto",
                marginRight: "20px",
              }}
            />
            <p style={{ color: "#333", fontSize: "16px" }}>
              La Importancia de la Automatización en las Empresas
            </p>
          </div>
          {/* Segunda imagen con texto */}
          <div
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={Image19}
              alt="rtiR2"
              style={{
                maxWidth: "200px",
                height: "auto",
                marginRight: "20px",
              }}
            />
            <p style={{ color: "#333", fontSize: "16px" }}>
              ¿Qué es Asana y para qué sirve?
            </p>
          </div>
          {/* Tercera imagen con texto */}
          <div
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={Image20}
              alt="ArtiR3"
              style={{
                maxWidth: "200px",
                height: "auto",
                marginRight: "20px",
              }}
            />
            <p style={{ color: "#333", fontSize: "16px" }}>
              La Importancia del Diseño de Museografía Científica
            </p>
          </div>
        </div>
      </center>
    </div>
  );
};

export default RecentArticles;
