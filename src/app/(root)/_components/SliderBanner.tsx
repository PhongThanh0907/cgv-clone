"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner01 from "../../../../public/banner01.png";
import Banner02 from "../../../../public/banner02.jpg";
import Banner03 from "../../../../public/banner03.jpg";
import Banner04 from "../../../../public/banner04.png";
import Arrow from "@/icons/Arrow";

const SliderBanner = () => {
  const sliderRef = useRef<Slider | null>(null);

  const dataImg = [Banner01, Banner02, Banner03, Banner04];

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: string) => (
      <div className="relative">
        <ul
          className="absolute -top-12 inset-x-0 flex-center"
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),

    customPaging: () => (
      <div className="h-3.5 w-3.5 rounded-full bg-gray-500"></div>
    ),
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {dataImg.map((image, index) => (
          <Image
            className="border border-white lg:h-[447px] h-[177px] w-auto"
            key={index}
            src={image}
            height={447}
            width={978}
            alt="img-banner"
          />
        ))}
      </Slider>

      <button
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        aria-label="previous"
        className="absolute left-4 opacity-50 hover:opacity-100 duration-300"
        onClick={previous}
      >
        <Arrow height={40} width={20} />
      </button>
      <button
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        aria-label="next"
        className="absolute right-4 opacity-50 hover:opacity-100 duration-300"
        onClick={next}
      >
        <Arrow className="rotate-180" height={40} width={20} />
      </button>
    </div>
  );
};

export default SliderBanner;
