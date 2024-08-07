"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

import Button from "@/components/Button";
import { listEventData, listFilmData } from "@/constants/data";
import Arrow from "@/icons/Arrow";

const Event = () => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-[280px] mx-auto lg:w-full">
      <Slider className="relative z-[1]" ref={sliderRef} {...settings}>
        {listEventData.map((item, index) => (
          <div
            className="lg:w-[240px] w-[280px] flex justify-center items-center mx-auto relative cursor-pointer"
            key={index}
          >
            <Image
              className="h-[201px] object-cover mx-auto rounded cursor-pointer hidden w-full"
              src={item.img}
              alt="img-film"
              height={201}
              width={240}
            />
          </div>
        ))}
      </Slider>

      <button
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        aria-label="previous"
        className="absolute -left-[33px] opacity-70 hover:opacity-100 duration-300 h-16 w-9 bg-red-600 rounded-l-full "
        onClick={previous}
      >
        <Arrow height={30} width={14} className="ml-3" />
      </button>
      <button
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        aria-label="next"
        className="absolute -right-[33px] opacity-70 hover:opacity-100 duration-300 h-16 w-9 bg-red-600 rounded-r-full "
        onClick={next}
      >
        <Arrow
          className="rotate-180 relative -right-2.5"
          height={30}
          width={14}
        />
      </button>
    </div>
  );
};

export default Event;
