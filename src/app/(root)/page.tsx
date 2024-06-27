import Image from "next/image";

import { MenuHeader } from "@/constants/data";
import ToggleLanguage from "./_components/ToggleLanguage";
import Header from "./_components/Header";
import Std from "./_components/Std";
import Banner from "./_components/Banner";
import TitleSection from "@/components/TitleSection";
import ListFilm from "./_components/ListFilm";

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
        <div className="w-full flex justify-end items-center gap-3">
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
          </div>
        </div>
      </div>
    </main>
  );
}
