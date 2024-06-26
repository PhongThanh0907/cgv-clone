import React from "react";

import Slider from "@/components/Slider";
import Banner01 from "../../../../public/banner01.png";
import Banner02 from "../../../../public/banner02.jpg";
import Banner03 from "../../../../public/banner03.jpg";
import Banner04 from "../../../../public/banner04.png";

const Banner = () => {
  const dataImg = [Banner01, Banner02, Banner03, Banner04];

  return (
    <div
      className="h-[447px] w-full mt-4"
      style={{
        backgroundImage: "url(/bg_c_bricks.png)",
      }}
    >
      <div className="default-screen h-full">
        <Slider data={dataImg} />
      </div>
    </div>
  );
};

export default Banner;
