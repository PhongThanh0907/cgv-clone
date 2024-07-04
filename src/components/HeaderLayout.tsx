import Header from "@/app/(root)/_components/Header";
import MenuMobile from "@/app/(root)/_components/MenuMobile";
import Image from "next/image";
import React from "react";
import HeaderNav from "./HeaderNav";

const HeaderLayout = () => {
  return (
    <>
      <div className="flex-center default-screen flex-col">
        <Image
          src="/bannerHeader.jpg"
          alt="CGV-banner"
          width={980}
          height={80}
        />

        <HeaderNav />

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
