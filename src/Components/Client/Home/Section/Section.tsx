import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useData } from "../../../../Context/DataProviders";

const Section = () => {
  const { Slides, Introduction } = useData();
  console.log(Introduction);
  return (
    <>
      <div className="h-max">
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
          {Slides?.map((item: any, idx: number) => (
            <SwiperSlide>
              <div className="w-full">
                <img className="w-full h-full object-cover" src={item.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="flex gap-2 py-5 px-5 d:flex-row p:flex-col d:w-[1300px] p:w-auto mx-auto">
          <div className=" flex-[45%]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2FT%E1%BB%9D%20r%C6%A1i-m%E1%BA%B7t%20ngo%C3%A0i.jpg?alt=media&token=0a8e2b71-6a7d-461c-a4f6-a633586cb16f"
              alt="banner"
              className="w-full h-full"
            />
          </div>
          <div className=" flex-[55%] px-10">
            <h3 className="font-LexendDeca font-bold text-[40px]">
              Giới thiệu
            </h3>
            <h3 className="font-UTMAmerican font-bold text-mainred text-center text-[30px] leading-7">
              GÖTTER
            </h3>
            <div
              className="indent-3 mt-5"
              dangerouslySetInnerHTML={{ __html: Introduction?.content }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
