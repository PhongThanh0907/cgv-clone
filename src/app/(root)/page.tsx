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
      <div className="lg:pt-6">
        <Std />

        <Banner />

        <div className="default-screen">
          <div>
            <TitleSection className="my-3.5 lg:my-7">
              <Image
                className="hidden lg:block"
                src="/movie_selection.gif"
                alt="icon"
                width={425}
                height={60}
              />
              <Image
                className="lg:hidden"
                src="/movie_selection.gif"
                alt="icon"
                width={272}
                height={50}
              />
            </TitleSection>

            <ListFilm />

            <TitleSection className="my-3.5 lg:my-7">
              <Image
                className="hidden lg:block"
                src="/h3_event.gif"
                alt="icon"
                width={176}
                height={60}
              />
              <Image
                className=" lg:hidden"
                src="/h3_event.gif"
                alt="icon"
                width={97}
                height={50}
              />
            </TitleSection>

            <div className="flex justify-center pb-4">
              <div className="bg-red-600 w-44 lg:w-48 h-10 flex items-center justify-end pr-2.5 relative gap-2">
                <Image
                  src="/ico_finger.png"
                  alt="icon"
                  width={32}
                  height={14.5}
                />
                <span className="text-xs lg:text-sm text-white">
                  Thành Viên CGV
                </span>
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[22px] border-l-white absolute left-0"></div>
              </div>
              <div className="bg-red-600 w-1 h-10 flex-center">
                <div className="h-5 bg-white w-[1px]" />
              </div>
              <div className="bg-red-600 w-36 h-10 flex items-center justify-start pl-2.5 relative">
                <span className="text-xs lg:text-sm text-white">
                  Tin Mới & Ưu Đãi
                </span>
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[22px] border-r-white absolute right-0"></div>
              </div>
            </div>

            <Event />

            <div className="w-full h-0.5 lg:h-1 bg-black my-3.5 lg:my-6 rounded" />

            <div className="flex gap-2 lg:gap-0 justify-between py-2">
              <div className="border-2 lg:border-[3px] border-black p-1 ">
                <Image
                  className="lg:h-[245px] h-[89px] rounded"
                  src="/event03.jpg"
                  alt=""
                  height={245}
                  width={215}
                />
              </div>

              <div className="border-2 lg:border-[3px] border-black p-1 ">
                <Image
                  className="lg:h-[245px] h-[89px]"
                  src="/banner01.png"
                  alt=""
                  height={267}
                  width={496}
                />
              </div>

              <div className="border-[2px] lg:border-[3px] border-black p-1 ">
                <Image
                  className="lg:h-[245px] h-[89px] rounded"
                  src="/event02.jpg"
                  alt=""
                  height={245}
                  width={215}
                />
              </div>
            </div>

            <div className="w-full h-0.5 lg:h-1 bg-black mt-3.5 lg:mt-2 rounded" />
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
