import React from "react";
import Slider from "react-slick";
import Image from "../images/pexels1.jpg";
import Image2 from "../images/pexels2.jpg";
import Image3 from "../images/pexels3.jpg";

const SliderOne = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // show one picture
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // slide pic to pic every 3 secs
  };

  return (
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
  );
};

export default SliderOne;
