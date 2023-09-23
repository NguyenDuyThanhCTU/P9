import React from "react";

const Introduce = ({
  background,
  icon,
  title,
  content,
  type,
  contentColor,
  titleColor,
}: any) => {
  return (
    <>
      {type === "left" ? (
        <>
          {" "}
          <div className="relative h-max">
            <img src={background} alt="lock image" />
            <div className="absolute w-full h-full flex top-0 gap-10">
              <div className="flex-1 flex flex-col gap-5 justify-center items-end h-full ">
                <div>
                  <img src={icon} alt="blutooth" />
                </div>
                <div className="text-end">
                  <h1 className={`${titleColor} text-[42px] font-bold  `}>
                    {title}
                  </h1>
                  <h2
                    className={`text-[24px] font-light mt-5 max-w-[450px] ${contentColor}`}
                  >
                    {content}
                  </h2>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="relative h-max">
            <img src={background} alt="lock image" />
            <div className="absolute w-full h-full flex top-0 gap-10">
              <div className="flex-1"></div>
              <div className="flex-1 flex flex-col gap-5 justify-center h-full ">
                <div>
                  <img src={icon} alt="blutooth" />
                </div>
                <div>
                  <h1 className={`${titleColor} text-[42px] font-bold `}>
                    {title}
                  </h1>
                  <h2
                    className={`text-[24px] font-light mt-5 max-w-[450px] ${contentColor}`}
                  >
                    {content}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Introduce;
