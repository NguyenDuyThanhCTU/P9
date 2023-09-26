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
          <div className="relative h-max flex d:flex-row p:flex-col">
            <img src={background} alt="lock image" />
            <div className="p:relative d:absolute w-full h-full flex top-0 gap-10">
              <div className="flex-1 flex flex-col gap-5 justify-center d:items-end p:items-center p:text-center d:text-left h-full  text-center">
                <div>
                  <img src={icon} alt="blutooth" />
                </div>
                <div className="d:text-end p:text-center">
                  <h1 className={`${titleColor} text-[42px] font-bold  `}>
                    {title}
                  </h1>
                  <h2
                    className={`text-[24px] font-light mt-5 max-w-[450px] p:text-black d:${contentColor}`}
                  >
                    {content}
                  </h2>
                </div>
              </div>
              <div className="flex-1 d:block p:hidden"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="relative h-max ">
            <img src={background} alt="lock image" />
            <div className="p:relative d:absolute  w-full h-full flex top-0 gap-10">
              <div className="flex-1 d:block p:hidden"></div>
              <div className="flex-1 flex flex-col gap-5 justify-center d:items-start p:items-center p:text-center d:text-left h-full ">
                <div>
                  <img src={icon} alt="blutooth" />
                </div>
                <div>
                  <h1 className={`${titleColor} text-[42px] font-bold `}>
                    {title}
                  </h1>
                  <h2
                    className={`text-[24px] font-light mt-5 max-w-[450px]  p:text-black d:${contentColor}`}
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
