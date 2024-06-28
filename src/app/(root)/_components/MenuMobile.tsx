"use client";

import { MenuNavHeader } from "@/constants/data";
import Bars from "@/icons/Bars";
import Caret from "@/icons/Caret";
import User from "@/icons/User";
import Image from "next/image";
import React, { useState } from "react";

const MenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<string[]>([]);

  const handleActiveTab = (value: string) => {
    if (activeTab.includes(value)) {
      setActiveTab(activeTab.filter((item) => item !== value));
    } else {
      setActiveTab([...activeTab, value]);
    }
  };

  return (
    <div className="grid grid-cols-4 w-full border-t border-b border-[#ededed] relative">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={`border-r border-[#ededed] flex-center py-2 ${
          openMenu ? "bg-gray-100" : "bg-transparent"
        }`}
      >
        <Bars fill="#999999" height={22} width={22} />
      </div>
      <div className="border-r border-[#ededed] flex-center py-2">
        <Image src="/icons/icon_ticket.png" alt="logo" width={25} height={32} />
      </div>
      <div className="border-r border-[#ededed] flex-center py-2">
        <User fill="#999999" height={22} width={22} />
      </div>
      <div className="flex-center py-2">
        <span className="text-gray-400 uppercase">EN</span>
      </div>
      {openMenu && (
        <div className="col-span-4 absolute top-10 bg-gray-100 z-10 inset-x-0 py-1">
          {MenuNavHeader.map((item, index) => (
            <div
              onClick={() => handleActiveTab(item.title)}
              className={`flex justify-start flex-col gap-2 py-1 relative ${
                index < MenuNavHeader.length - 1
                  ? "border-b border-gray-300"
                  : ""
              }`}
              key={index}
            >
              <div className="flex items-center gap-2 justify-start relative top-1">
                <Caret
                  height={16}
                  width={16}
                  className={`relative -top-0.5 duration-300 ${
                    activeTab.includes(item.title)
                      ? " rotate-0 left-1"
                      : "-rotate-90"
                  }`}
                  fill="#cccccc"
                />
                <span
                  className={` font-bold leading-[30px] block ${
                    activeTab.includes(item.title)
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  {item.title}
                </span>
              </div>

              {activeTab.includes(item.title) ? (
                <div
                  style={{
                    height: `${4 + item.children.length * 34}px`,
                  }}
                  className="duration-300 opacity-100"
                >
                  <ul className="pl-6">
                    {item.children.map((child, index) => (
                      <li
                        className="pl-4 py-0.5 leading-[30px] relative z-10"
                        key={index}
                      >
                        <span className="text-gray-500 text-sm">
                          {child.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="h-0 duration-300 opacity-0 overflow-hidden z-[-1]"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
