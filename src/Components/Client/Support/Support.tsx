import React from "react";
import SupportCard from "./Items/SupportCard";

const Support: React.FC = () => {
  const SupportItems = [
    {
      topic: "DIGITAL DOOR LOCK",
      image:
        "https://www.samsungdigitallife.com/wp-content/uploads/2018/03/ddl_icon_support.png",
      url: "",
      color: "00bfb2",
      bgColor: "eeffe9",
    },
    {
      topic: "A/V INTERCOM",
      image:
        "https://www.samsungdigitallife.com/wp-content/uploads/2018/03/intercom_icon_support.png",
      url: "",
      color: "7c77f2",
      bgColor: "dfe2ff",
    },
    {
      topic: "SMART CAMERA",
      image:
        "https://www.samsungdigitallife.com/wp-content/uploads/2018/03/smartcam_icon_support.png",
      url: "",
      color: "ff7555",
      bgColor: "fff1ef",
    },
    {
      topic: "SMART HOME HUB",
      image:
        "https://www.samsungdigitallife.com/wp-content/uploads/2018/03/smarthub_icon_support.png",
      url: "",
      color: "468fff",
      bgColor: "e9f7ff",
    },
  ];
  return (
    <div>
      <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2018/03/support_header_bg4.jpg)] h-[315px] bg-center bg-repeat-x">
        <div className="p:w-auto d:w-[1200px] mx-auto flex items-center h-full">
          <h1 className="text-[#625b44] text-[42px] uppercase font-bold ">
            SUPPORT
          </h1>
        </div>
      </div>
      <div className="p:w-auto d:w-[1200px] mx-auto flex flex-col py-10">
        <h1 className="text-gray-500 text-[42px] uppercase font-bold  text-center">
          Nhận hỗ trợ
        </h1>
        <div className="grid p:grid-cols-2 d:grid-cols-4 gap-5 mt-5">
          {SupportItems.map((item: any, index: number) => {
            const bgColor = item.bgColor;
            return (
              <div
                key={index}
                className={`flex w-full justify-center `}
                style={{ backgroundColor: `#${bgColor}` }}
              >
                <SupportCard Data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Support;
