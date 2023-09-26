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
      <div className="p:relative d:absolute w-full  top-0  py-10 text-center">
        <div className="flex flex-col justify-center items-center p:w-auto d:w-[1000px] mx-auto">
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
              Khóa bảo mật kỹ thuật số của chúng tôi (Mortise, Deadbolt, RIM)
              đang liên tục nâng cao các giới hạn về an ninh gia đình với khái
              niệm khóa PUSH PULL mới được phát hành và công nghệ BLUETOOTH.
            </p>
            <p className="text-[24px] font-light">
              Chúng tôi cung cấp nhiều KHÓA KỸ THUẬT SỐ VÂN TAY và đã mở rộng
              phạm vi phủ sóng của chúng tôi sang CỔNG và Cửa Kính. Bảo mật là
              mối quan tâm của bạn; và đặc sản của chúng tôi.
            </p>
            <p className="w-[400px] text-[30px] font-bold italic text-[#9e684b]">
              “Một cuộc sống an toàn và tiện lợi nhờ Khóa Cửa Thông Minh
              Samsung”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
