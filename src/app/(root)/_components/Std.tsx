import { ListStd } from "@/constants/data";
import React from "react";

const Std = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/bg-header-transparent-home.png)",
        backgroundRepeat: "no-repeat",
      }}
      className="default-screen h-[108px] border-b border-[#222] hidden lg:block"
    >
      <ul className="flex border-b border-[#222] h-[102px]">
        {ListStd.map((item, index) => (
          <li
            key={index}
            className={`w-[140px] h-[90px] cursor-pointer ${
              index < ListStd.length - 1 ? "border-r border-[#222]" : ""
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Std;
