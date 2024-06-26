import { dataFooter } from "@/constants/data";
import Image from "next/image";
import React from "react";

const FooterLayout = () => {
  return (
    <div>
      <div className="mt-8 border-t-[2px] border-b-[2px] border-gray-500 flex-center h-[44px]">
        <div className="default-screen flex-center relative top-1">
          <Image
            src="/brand-type-film-footer_ver2.png"
            alt="brand-type"
            width={980}
            height={28}
          />
        </div>
      </div>

      <div className="default-screen  justify-between py-5 hidden lg:flex">
        {dataFooter.map((item, index) => (
          <div className="w-[240px]" key={index}>
            <h3 className="font-bold text-gray-800 pb-2">{item.title}</h3>
            <ul>
              {item.children.map((child, index) => (
                <li key={index}>{child.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full h-[2px] bg-gray-500 rounded hidden lg:flex" />

      <div className="default-screen flex lg:flex-row flex-col items-center gap-6 py-3">
        <div className="w-[120px] h-full flex-center">
          <Image src="/logoCGV.png" alt="logo" width={120} height={43} />
        </div>

        <div className="px-4 lg:px-0">
          <h3 className="text-[14px] font-bold text-[#636363] pb-1">
            CÔNG TY TNHH CJ CGV VIỆT NAM
          </h3>

          <div className="flex flex-col gap-4 lg:gap-0 text-[#636363] text-[13px]">
            <p>
              Giấy Chứng nhận đăng ký doanh nghiệp: 0303675393 đăng ký lần đầu
              ngày 31/7/2008, được cấp bởi Sở Kế hoạch và Đầu tư Thành phố Hồ
              Chí Minh
            </p>
            <p>
              Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10,
              Thành phố Hồ Chí Minh, Việt Nam
            </p>
            <p>Đường dây nóng (Hotline): 1900 6017</p>
            <p>COPYRIGHT 2017 CJ CGV VIETNAM CO., LTD. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
      <div
        className="h-28 w-full relative"
        style={{
          backgroundImage: "url(/bg-bottom-footer.jpg)",
        }}
      ></div>
    </div>
  );
};

export default FooterLayout;
