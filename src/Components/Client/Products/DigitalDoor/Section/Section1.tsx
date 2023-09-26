import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export const Section1: React.FC = () => {
  const FeatureItem = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2F1.png?alt=media&token=536cbefb-d43d-437b-b1ac-c7981d73a06f",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2F2.png?alt=media&token=ebd412bb-d7bf-49e6-a1f9-7e8a1b9c0996",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2F3.png?alt=media&token=2aaa24f7-3277-4d59-ae1b-dd1b127c5270",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2F4.png?alt=media&token=9fa02ec3-b698-45de-a0bc-46b04c3e3e19",
    },
  ];
  return (
    <div className="bg-[#5900ce]">
      <div className="p:w-auto d:w-[1300px] mx-auto flex flex-col py-10">
        <h3 className="p:text-[24px] d:text-[34px] text-[#00d8ff] font-bold  text-center ">
          TÍNH NĂNG CHÍNH CỦA KHÓA CỬA ĐIỆN TỬ SỐ SAMSUNG
        </h3>
        <div className="mt-3">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {FeatureItem.map((item, index) => (
              <>
                <SwiperSlide>
                  <div className="w-full flex justify-center">
                    <img src={item.image} alt="" />
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
