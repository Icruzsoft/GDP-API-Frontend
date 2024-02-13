import React from "react";
import "../styles/footer.css";
import fb from "../images/footer/fb.png";
import insta from "../images/footer/insta.png";
import whats from "../images/footer/whats.png";
import Logo from "../images/footer/Logo.png";
function Footer() {
  return (
    <div className="Footer" style={{ position: "absolute", bottom: 0 }}>
      <div className="sb_footer">
        <div className="links">
          <div className="socialmedia1">
            <div className="lc">
              <a href="#">
                <img src={Logo}></img>
              </a>
              <a>Community Lab Alliance</a>
            </div>
            <div className="cc">
              <a href="#">Aviso de Privacidad</a>
            </div>
            <div className="rc">
              <a href="#">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="#">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="#">
                <img src={whats} alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
