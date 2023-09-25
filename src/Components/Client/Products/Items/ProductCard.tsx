import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ Data }: any) => {
  return (
    <Link to={`/san-pham/${Data.url}`}>
      <div className="bg-[#f1f2f8]">
        <div className="p-3">
          <div className="p-4">
            <img src={Data.image} alt="product" />
          </div>
          <div className="flex w-full flex-col items-center gap-3">
            <h2 className="text-mainblue font-bold text-[24px]">
              {Data.title}
            </h2>
            <h3></h3>
            <div className="px-7 rounded-full uppercase text-white font-semibold py-2 bg-mainblue">
              Chi tiết
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
