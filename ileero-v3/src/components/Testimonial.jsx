import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import Slider from "react-slick";

function Arrow(props) {
  const { Icon, className, style, onClick } = props;
  return (
    <Icon
      className={className}
      style={{
        ...style,
        width: "24px",
        height: "24px",
        display: "block",
        color: "black",
        background: "transparent",
      }}
      onClick={onClick}
    />
  );
}

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
     
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ],
    prevArrow: <Arrow Icon={BsArrowLeftCircle}  className="hidden md:flex"/>,
    nextArrow: <Arrow Icon={BsArrowRightCircle}  className="hidden md:flex"/>,
  };
  return (
    <section className="max-w-[1100px] mx-auto min-h-min md:min-h-screen p-1 md:p-20">
      <div className="text-center text-4xl font-bold">
        <h1>
          What our customers <br /> say about Ileero Remit
        </h1>
      </div>
      <div className="">
        <Slider {...settings} className="px-2">
          <div className="h-[250px] ">
            <div className="flex flex-col h-full px-[20px] md:px-[51px] py-12 items-start justify-around shadow-xl md:mx-2 shadow-[#1892F529] rounded-2xl mt-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quia distinctio, provident iste rerum ab delectus dolore.
                provident iste rerum ab dolore.
              </p>
              <div className="flex space-x-1 items-center justify-start">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="user">
              <div className="user-img" />
              <div className="user-details">
                <span className="name">Ajayi Joseph</span>
                <span className="position">Android Developer</span>
              </div>
            </div>
          </div>
          <div className="h-[250px] ">
            <div className="flex flex-col h-full px-[51px] py-12 items-start justify-around shadow-xl mx-2 shadow-[#1892F529] rounded-2xl mt-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quia distinctio, provident iste rerum ab delectus dolore.
                provident iste rerum ab dolore.
              </p>
              <div className="flex space-x-1 items-center justify-start">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="user">
              <div className="user-img" />
              <div className="user-details">
                <span className="name">Ajayi Joseph</span>
                <span className="position">Android Developer</span>
              </div>
            </div>
          </div>
          <div className="h-[250px]">
            <div className="flex flex-col h-full px-[51px] py-12 items-start justify-around shadow-xl mx-2 shadow-[#1892F529] rounded-2xl mt-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quia distinctio, provident iste rerum ab delectus dolore.
                provident iste rerum ab dolore.
              </p>
              <div className="flex space-x-1 items-center justify-start">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
            <div className="user">
              <div className="user-img" />
              <div className="user-details">
                <span className="name">Jessica Joseph</span>
                <span className="position">Android Developer</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
