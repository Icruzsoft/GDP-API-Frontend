import React from "react";
import Logo from "../images/footer/Logo.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 items-center gap-4 w-full">
      <div className="flex items-center gap-4 w-full">
        <img
          src={Logo}
          alt="Community Lab Alliance Logo"
          className="w-12 h-12 rounded-full ml-10"
        />
        <a className="font-bold text-gray-200 text-[15px] ml-10 hover:text-gray-100">
          Community Lab Alliance
        </a>
        <a href="https://drive.google.com/file/d/11_DZ7m2lQnkoFVbLEGhag4W_XRqcM-on/view" className="font-bold text-lime-500 text-[15px] ml-72 hover:text-lime-500">
          Aviso de Privacidad
        </a>
        <a className="font-bold text-gray-200 text-[15px] ml-80 hover:text-gray-100">
          @2023 Community Lab Alliance
        </a>
      </div>
    </footer>
  );
}
export default Footer;
