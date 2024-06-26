import React from "react";

import SliderBanner from "./SliderBanner";

const Banner = () => {
  return (
    <div
      className="h-[447px] w-full mt-4"
      style={{
        backgroundImage: "url(/bg_c_bricks.png)",
      }}
    >
      <div className="default-screen h-full">
        <SliderBanner />
      </div>
    </div>
  );
};

export default Banner;
