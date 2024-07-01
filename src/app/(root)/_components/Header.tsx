import { MenuNavHeader } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="w-full mx-auto mt-1 hidden lg:block"
      style={{
        backgroundImage: "url(/bg-top.png)",
        backgroundSize: "10px 135px",
      }}
    >
      <div className="default-screen flex-between h-[134px]">
        <div className="flex gap-5">
          <Link href="/">
            <Image
              className="hover-70"
              src="/logoCGV.png"
              alt="logo-cgv"
              width={136}
              height={59}
            />
          </Link>

          <ul className="flex gap-8 items-center relative top-[18px]">
            {MenuNavHeader.map((item, index) => (
              <li className="group relative" key={index}>
                <span className="text-[#222225] font-bold leading-[30px]">
                  {item.title}
                </span>
                <ul
                  style={{
                    backgroundImage: "url(/bg_menu_hover.png)",
                  }}
                  className={`hidden group-hover:block absolute left-0 w-48 duration-300 py-2.5 z-10`}
                >
                  {item.children.map((child, index) => (
                    <li
                      className="text-white pl-4 py-0.5 leading-[30px] relative z-10"
                      key={index}
                    >
                      <span className="hover-70">{child.title}</span>
                    </li>
                  ))}
                  <div className="absolute inset-1 border-2 border-[#828282]" />
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Image
            className="w-auto h-[29px]"
            src="/channelCGV.gif"
            alt="channel"
            width={139}
            height={29}
          />
          <Image
            className="relative -top-4"
            src="/mua-ve_ngay.png"
            alt="mua-ve"
            width={93}
            height={76}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
