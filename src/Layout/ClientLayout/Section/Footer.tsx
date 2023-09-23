import React from "react";
import { useData } from "../../../Context/DataProviders";

import { IconMapping, SocialMediaCustom } from "../../../Utils/item";
import { AiOutlineSearch } from "react-icons/ai";

const Footer: React.FC = () => {
  const { TradeMarkData, ContactData, SocialMedia } = useData();
  const supportItems: any = [
    {
      id: 1,
      title: "Liên hệ",
      url: "/",
    },
    {
      id: 2,
      title: "Câu hỏi thuờng gặp",
      url: "/",
    },
    {
      id: 3,
      title: "Xử lý sự cố",
      url: "/",
    },
    {
      id: 4,
      title: "Tìm phân phối",
      url: "/",
    },
  ];

  const companyItems: any = [
    {
      id: 1,
      title: "Về chúng tôi",
      url: "/",
    },
    {
      id: 2,
      title: "Dự án của chúng tôi",
      url: "/",
    },
    {
      id: 3,
      title: "Chính sách bảo mật  ",
      url: "/",
    },
    {
      id: 4,
      title: "Điều khoản sử dụng",
      url: "/",
    },
  ];

  return (
    <div className="bg-[#2b2e32]">
      <div className="w-[1300px] mx-auto py-10 grid p:grid-cols-1 d:grid-cols-4  text-white font-Main  p-2 gap-5">
        <div></div>
        <div>
          <h1 className="text-[20px] font-bold mb-4 uppercase">Hỗ trợ</h1>
          <div className="flex flex-col gap-3 cursor-pointer">
            {supportItems.map((item: any) => (
              <>
                <div className="uppercase hover:text-mainblue duration-300  text-[13px]">
                  {item.title}
                </div>
              </>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[20px] font-bold mb-4 uppercase">Công Ty</h1>
          <div className="flex flex-col gap-3 cursor-pointer">
            {companyItems.map((item: any) => (
              <>
                <div className="uppercase hover:text-mainblue duration-300  text-[13px]">
                  {item.title}
                </div>
              </>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[20px] font-bold mb-4 uppercase">
            Kết nối với chúng tôi
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex mt-2 gap-2">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];
                let Point = SocialMedia[items.id];

                return (
                  <div
                    key={idx}
                    className={`${items.style} p-2 border rounded-full hover:scale-110 duration-300 border-white `}
                  >
                    {Icon && (
                      <a href={`https://${Point}`} target="_blank">
                        <Icon />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <div className="bg-white text-black flex">
                <input type="text" className="outline-none p-2" />
                <div className="px-3 flex items-center text-white bg-black hover:bg-mainblue duration-300 text-[22px]  ">
                  <AiOutlineSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
