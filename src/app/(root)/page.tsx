import Image from "next/image";

import { MenuHeader } from "@/constants/data";
import ToggleLanguage from "./_components/ToggleLanguage";
import Header from "./_components/Header";
import Std from "./_components/Std";
import Banner from "./_components/Banner";
import TitleSection from "@/components/TitleSection";
import ListFilm from "./_components/ListFilm";
import Event from "./_components/Event";
import Footer from "@/components/Footer";
import MenuMobile from "./_components/MenuMobile";

export default function Home() {
  return (
    <main>
      <div className="flex-center default-screen flex-col">
        <Image
          src="/bannerHeader.jpg"
          alt="CGV-banner"
          width={980}
          height={80}
        />
        <div className="w-full justify-end items-center gap-3 hidden lg:flex">
          <ul className="flex gap-6 items-center relative top-[1px]">
            {MenuHeader.map((item, index) => (
              <li className="flex items-center gap-1 hover-70" key={index}>
                <Image src={item.img} alt="icon" width={25} height={25} />
                <span className="text-[#666]"> {item.title}</span>
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

      <div className="pt-6">
        <Std />

        <Banner />

        <div className="default-screen">
          <div>
            <TitleSection className="my-7">
              <Image
                src="/movie_selection.gif"
                alt="icon"
                width={425}
                height={60}
              />
            </TitleSection>

            <ListFilm />

            <TitleSection className="my-7">
              <Image src="/h3_event.gif" alt="icon" width={176} height={60} />
            </TitleSection>

            <div className="flex justify-center pb-4">
              <div className="bg-red-600 w-48 h-10 flex items-center justify-end pr-2.5 relative gap-2">
                <Image
                  src="/ico_finger.png"
                  alt="icon"
                  width={32}
                  height={14.5}
                />
                <span className="text-sm text-white">Thành Viên CGV</span>
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[22px] border-l-white absolute left-0"></div>
              </div>
              <div className="bg-red-600 w-1 h-10 flex-center">
                <div className="h-5 bg-white w-[1px]" />
              </div>
              <div className="bg-red-600 w-40 h-10 flex items-center justify-start pl-2.5 relative">
                <span className="text-sm text-white">Tin Mới & Ưu Đãi</span>
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[22px] border-r-white absolute right-0"></div>
              </div>
            </div>

            <Event />

            <div className="w-full h-1 bg-black my-6 rounded" />

            <div className="flex justify-between py-2">
              <div className="border-[3px] border-black p-1 ">
                <Image
                  className="h-[245px] rounded"
                  src="/event03.jpg"
                  alt=""
                  height={245}
                  width={215}
                />
              </div>

              <div className="border-[3px] border-black p-1 ">
                <Image
                  className="h-[245px]"
                  src="/banner01.png"
                  alt=""
                  height={267}
                  width={496}
                />
              </div>

              <div className="border-[3px] border-black p-1 ">
                <Image
                  className="h-[245px]"
                  src="/event02.jpg"
                  alt=""
                  height={245}
                  width={215}
                />
              </div>
            </div>

            <div className="w-full h-1 bg-black mt-2 rounded" />
          </div>
        </div>

        <div className="mt-8 border-t-[3px] border-b-[3px] border-black flex-center h-[44px]">
          <div className="default-screen flex-center relative top-1">
            <Image
              src="/brand-type-film-footer_ver2.png"
              alt="brand-type"
              width={980}
              height={28}
            />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
