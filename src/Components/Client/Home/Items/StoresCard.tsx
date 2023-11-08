import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useData } from "../../../../Context/DataProviders";

const StoresCart = ({ Data }: any) => {
  const { SocialMedia } = useData();
  // const Link = `${Data.name} === "Lazada" ?  https://${SocialMedia[6]} : ${Data.name} === "Tiktok" ?  https://${SocialMedia[5]} : https://${SocialMedia[3]} `;
  const Link = `${
    Data.name === "Lazada"
      ? `https://${SocialMedia[6]}`
      : Data.name === "Tiktok"
      ? `https://${SocialMedia[5]}`
      : `https://${SocialMedia[3]} `
  }`;
  console.log(Link);
  return (
    <div className="max-w-[300px] bg-white  rounded-3xl ">
      <div className="flex flex-col px-2 pb-8 pt-5  gap-10">
        <h1 className="text-[#fb018a] pb-4 border-b border-[#fb018a] text-center text-[24px] uppercase">
          {Data.name}
        </h1>
        <div>
          <img src={Data.image} alt="store card" />
        </div>
        <div
          className="py-4 cursor-pointer bg-[#fb018a] text-white rounded-full flex items-center gap-3 text-[20px] justify-center mx-3"
          onClick={() => window.open(Link, "_blank")}
        >
          <BsFillCartPlusFill />
          <span>Mua ngay</span>
        </div>
      </div>
    </div>
  );
};

export default StoresCart;
