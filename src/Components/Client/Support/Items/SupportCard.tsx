const SupportCard = ({ Data }: any) => {
  return (
    <div className="px-2 flex flex-col items-center gap-10 py-5">
      <div className="w-[90%]">
        <img src={Data.image} alt="support cart" className="w-full" />
      </div>
      <h1 className="font-bold text-[18px]">{Data.topic}</h1>
      <div className="flex relative group">
        <div
          className="py-2 px-8 font-semibold text-white uppercase cursor-pointer "
          style={{ backgroundColor: `#${Data.color}` }}
        >
          Chọn
        </div>
        <div className="overflow-hidden group-hover:py-2 group-hover:h-full duration-300  py-0 px-8 h-0 font-semibold uppercase cursor-pointer text-black bg-white absolute top-0">
          Chọn
        </div>
      </div>{" "}
    </div>
  );
};

export default SupportCard;
