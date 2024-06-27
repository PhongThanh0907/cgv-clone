"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

import Button from "@/components/Button";
import { listFilmData } from "@/constants/data";
import Arrow from "@/icons/Arrow";

const ListFilm = () => {
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
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative w-full">
      <Slider className="relative z-[1]" ref={sliderRef} {...settings}>
        {listFilmData.map((item, index) => (
          <div
            className="w-[240px] h-[355px] flex justify-center items-center mx-auto relative group cursor-pointer"
            key={index}
          >
            <Image
              className="h-[355px] object-cover mx-auto rounded cursor-pointer"
              src={item.img}
              alt="img-film"
              height={355}
              width={240}
            />

            <div className="absolute inset-y-0 inset-x-[2px] rounded opacity-0 group-hover:opacity-30 bg-black duration-300" />

            <div
              style={{
                left: "50%",
                transform: "translateX(-50%)",
              }}
              className="h-16 w-16 rounded-lg bg-red-600/80 absolute flex-center flex-col top-20 hover:bg-red-600 duration-300 cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <svg
                className="animate-move relative -left-1"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
              <span className="text-gray-100 text-xs font-semibold">PLAY</span>
            </div>

            <div className="absolute group-hover:h-[82px] h-0 overflow-hidden duration-300 bg-black/80 inset-x-[2px] bottom-0 rounded-b">
              <div className="flex-center flex-col h-full">
                <div className="text-white text-center">
                  <h4 className="text-md font-bold uppercase truncate">
                    {item.title}
                  </h4>

                  <div className="flex gap-4 pt-2 justify-center px-1.5">
                    <Button className="text-sm uppercase px-1.5 py-2">
                      Xem chi tiết
                    </Button>

                    <Button className="px-1">
                      <div className="flex text-sm uppercase border py-1 px-1.5 border-gray-200/50 rounded">
                        <Image
                          className="relative"
                          src="/bg-cate-booking.png"
                          alt="ticket"
                          height={24}
                          width={20}
                        />
                        <span className="pl-1">Mua vé</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
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

export default ListFilm;
