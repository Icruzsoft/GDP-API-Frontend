import React from "react";
import Slider from "react-slick";
import Image4 from "../../images/imghome/Logo1.jpg";
import Image5 from "../../images/imghome/Logo2.jpg";
import Image6 from "../../images/imghome/Logo3.jpg";
import Image7 from "../../images/imghome/Logo4.jpg";
import Image8 from "../../images/imghome/Logo5.jpg";
import Image9 from "../../images/imghome/Logo6.jpg";
import Image10 from "../../images/imghome/Logo7.jpg";
import Image11 from "../../images/imghome/Logo8.jpg";
import Image12 from "../../images/imghome/Logo9.jpg";
import Image13 from "../../images/imghome/Logo10.jpg";
import Image14 from "../../images/imghome/Logo11.jpg";
import Image15 from "../../images/imghome/Logo12.jpg";

const SliderThree = () => {
  const sliderSettingsThreePerSlide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // show four elements at once
    slidesToScroll: 4, // move four elements at once
    autoplay: true,
    autoplaySpeed: 3000, // change the slide every 2 seconds
  };
  return (
    <div className="flex justify-center mt-8">
      <Slider
        {...sliderSettingsThreePerSlide}
        className="w-full max-w-screen-lg"
      >
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
  );
};
export default SliderThree;
