import Header from "@/app/(root)/_components/Header";
import MenuMobile from "@/app/(root)/_components/MenuMobile";
import ToggleLanguage from "@/app/(root)/_components/ToggleLanguage";
import { MenuHeader } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLayout = () => {
  return (
    <>
      <div className="flex-center default-screen flex-col">
        <Image
          className="h-auto w-auto"
          src="/bannerHeader.jpg"
          alt="CGV-banner"
          width={980}
          height={80}
        />

        <div className="w-full justify-end items-center gap-3 hidden lg:flex">
          <ul className="flex gap-6 items-center relative top-[1px]">
            {MenuHeader.map((item, index) => (
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
          </ul>

          <ToggleLanguage />
        </div>

        <div className="lg:hidden w-full flex flex-col justify-center items-center">
          <Image
            className="py-3"
            src="/logoCGV.png"
            alt="logo"
            width={68}
            height={30}
          />

          <MenuMobile />
        </div>
      </div>

      <Header />
    </>
  );
};

export default HeaderLayout;
