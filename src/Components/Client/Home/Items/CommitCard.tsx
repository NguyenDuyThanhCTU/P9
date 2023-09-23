import React from "react";

const CommitCard = ({ Image, title, content }: any) => {
  return (
    <div className="relative group">
      <div className="bg-gray-100 h-[335px] group-hover:h-0 relative duration-300 ">
        <div className="p-6">
          <div>
            <img src={Image} alt="Commit cart" />
          </div>
          <h1 className="mt-5 font-bold text-center text-[28px]">{title}</h1>
        </div>
        <div className="absolute bg-[#7c41ea] flex h-0 group-hover:h-[335px] w-full items-center justify-center top-0 duration-300 text-white">
          <span className="px-4 hidden group-hover:block text-[18px]">
            {content}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommitCard;
