import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#eaeefc] ">
        <div className="w-[1200px] mx-auto flex flex-col gap-5 py-10 items-center">
          <h1 className="text-mainblue text-[42px] uppercase font-bold ">
            Kết nối với chúng tôi{" "}
          </h1>
          <h3 className="text-[20px] font-light">
            WE’D LOVE TO HEAR FROM YOU SO DO GET IN TOUCH IF YOU HAVE ANY
            QUESTIONS OR FEEDBACK.
          </h3>
        </div>
      </div>
      <div className="bg-blue-900 ">
        <div className="w-[1200px] mx-auto flex  gap-5 py-10 items-center">
          <div>
            <img
              src="https://www.samsungdigitallife.com/wp-content/uploads/2021/10/Chat-ICon-600x372.png"
              alt="contact"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#f9b44d] text-[42px] font-bold">
              NEED SUPPORT ?
            </h2>
            <p className=" font-semibold text-white text-[18px]">
              Trò chuyện với chúng tôi trên Whatsapp (hoặc) <br />
              Hãy gọi cho chúng tôi trong trường hợp khẩn cấp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
