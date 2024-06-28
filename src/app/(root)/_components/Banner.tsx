import React from "react";

import SliderBanner from "./SliderBanner";

const Banner = () => {
  return (
    <>
      <div
        className="h-[447px] w-full lg:mt-4 hidden lg:block"
        style={{
          backgroundImage: "url(/bg_c_bricks.png)",
        }}
      >
        <div className="default-screen h-full">
          <SliderBanner />
        </div>
      </div>
      <div className="h-[177px] w-full lg:mt-4 lg:hidden">
        <div className="default-screen h-full">
          <SliderBanner />
        </div>
      </div>
    </>
  );
};

export default Banner;
