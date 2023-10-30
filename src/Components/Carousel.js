// import "./Carousel.css"
// import './Carousel.css'
import { useState } from "react";
import Slider from "react-slick";
import img1 from "../assets/forCorosel/img1.webp"
import img2 from "../assets/forCorosel/img2.jpg"
import img3 from "../assets/forCorosel/img3.jpg"
import img4 from "../assets/forCorosel/img4.jpg"
import img5 from "../assets/forCorosel/img5.jpg"
import img6 from "../assets/forCorosel/img6.jpg"


import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [img1,img2,img3,img4,img5,img6];

export const Carousel=() =>{
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;