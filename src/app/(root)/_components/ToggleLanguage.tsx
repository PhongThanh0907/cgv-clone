"use client";

import { useState } from "react";

const ToggleLanguage = () => {
  const [language, setLanguage] = useState("vi");

  return (
    <div className="bg-[#898987] flex items-center rounded-md relative overflow-hidden">
      <button
        className="w-10 h-[22px] text-white flex-center relative z-10"
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <button
        className="w-10 h-[22px] text-white flex-center relative z-10"
        onClick={() => setLanguage("vi")}
      >
        VN
      </button>

      <div
        className={`absolute h-[22px] w-10 top-0 bg-red-600 ${
          language === "en" ? "left-0" : "left-10"
        } duration-300`}
      />
    </div>
  );
};

export default ToggleLanguage;
