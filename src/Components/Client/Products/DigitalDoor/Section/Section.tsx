import React from "react";

const Section: React.FC = () => {
  return (
    <div className="h-max relative">
      <div className="h-max">
        <img
          src="https://samsungdigitallife.com/wp-content/uploads/2018/05/productsheader6-bg.jpg"
          alt="digital door"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="absolute w-full  top-0  py-10 text-center">
        <div className="flex flex-col justify-center items-center w-[1000px] mx-auto">
          <div>
            <img
              src="https://www.samsungdigitallife.com/wp-content/uploads/2020/10/Samsung-Logo_2020-400x140.png"
              alt="samsung logo"
            />
          </div>
          <div className="flex flex-col gap-10 items-center ">
            <h1 className="text-[42px] font-bold text-purple-500">
              Samsung Digital Door Lock
            </h1>
            <p className="text-[24px] font-light">
              Our Digital Security Locks (Mortise, Deadbolt, RIM) are
              continually pushing the limits of home security with a newly
              released PUSH PULL lock concept and BLUETOOTH technology.
            </p>
            <p className="text-[24px] font-light">
              We offer numerous FINGERPRINT DIGITAL LOCKS and have expanded our
              coverage to GATES and Glass Doors. Security is your concern; and
              our specialty.
            </p>
            <p className="w-[400px] text-[30px] font-bold italic text-[#9e684b]">
              “A safe and convenient life made accessible by the Samsung Smart
              Door Lock”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
