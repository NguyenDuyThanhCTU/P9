import React from "react";
import { useData } from "../../../Context/DataProviders";
import { Link } from "react-router-dom";

const Promotion = () => {
  const { Posts } = useData();
  return (
    <div className="">
      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Froadshowbg3.jpg?alt=media&token=e5c2479b-7ed6-466d-a96d-174e3cb770cf)] bg-no-repeat bg-cover">
        <div className="p:w-auto d:w-[1200px] bg-white mx-auto">
          <div className="m-8 bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fitshoetitlebg2.jpg?alt=media&token=372fcec3-e3e9-4193-ae0c-19998da63cfb)] h-[315px] flex items-center justify-center ">
            <h1 className="text-[#00d8ff] text-[42px] uppercase font-bold text-center">
              Các sản phẩm <br /> khuyến mãi mới nhất
            </h1>
          </div>
          <div className="flex flex-col gap-2 w-full p-8">
            {Posts.map((items: any, idx: number) => (
              <Link to={`/khuyen-mai/${items.url}`}>
                <div className="h-max">
                  <img src={items.image} alt="promotion" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
