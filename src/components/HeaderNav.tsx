"use client";

import { MenuHeader } from "@/constants/data";
import useStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const HeaderNav = () => {
  const [language, setLanguage] = useState("vi");

  const { userInfo, setAccessToken, setUserInfo } = useStore();

  useEffect(() => {
    if (!userInfo) {
      setAccessToken(localStorage.getItem("accessToken") || "");
      setUserInfo(jwtDecode(localStorage.getItem("accessToken") || ""));
    }
  }, [userInfo, setAccessToken, setUserInfo]);

  return (
    <div className="w-full justify-end items-center gap-3 hidden lg:flex">
      <ul className="flex gap-6 items-center relative top-[1px]">
        {MenuHeader.slice(0, 2).map((item, index) => (
          <li className="flex items-center gap-1 hover-70" key={index}>
            <Link className="flex items-center gap-1 hover-70" href={item.link}>
              <Image src={item.img} alt="icon" width={25} height={25} />
              <span className="text-[#666]"> {item.title}</span>
            </Link>
          </li>
        ))}
        {userInfo ? (
          <li>Xin chào, {userInfo.name}</li>
        ) : (
          <>
            {MenuHeader.slice(2, 3).map((item, index) => (
              <li className="flex items-center gap-1 hover-70" key={index}>
                <Link
                  className="flex items-center gap-1 hover-70"
                  href={item.link}
                >
                  <Image src={item.img} alt="icon" width={25} height={25} />
                  <span className="text-[#666]"> {item.title}</span>
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>

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
    </div>
  );
};

export default HeaderNav;
