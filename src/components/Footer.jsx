import React from "react";
import fb from "../images/footer/fb.png";
import insta from "../images/footer/insta.png";
import whats from "../images/footer/whats.png";
import Logo from "../images/footer/Logo.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 grid grid-cols-2 items-center gap-4 w-full">
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="Community Lab Alliance Logo"
          className="w-12 h-12 rounded-full"
        />
        <a href="#" className="font-bold text-xl">
          Community Lab Alliance
        </a>
        <a href="#" className="hover:opacity-75">
          Aviso de Privacidad
        </a>
      </div>
      <div className="flex items-center justify-end gap-4">
        {" "}
        <a href="#" className="rounded-full hover:opacity-75 shadow-md">
          <img src={fb} alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="#" className="rounded-full hover:opacity-75 shadow-md">
          <img src={insta} alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="#" className="rounded-full hover:opacity-75 shadow-md">
          <img src={whats} alt="WhatsApp" className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
