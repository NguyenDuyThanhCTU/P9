import React from "react";
import { LazadaItems } from "../../../../Utils/temp";
import StoresCart from "../Items/StoresCard";

const Section2 = () => {
  return (
    <div className="flex flex-col ">
      {" "}
      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2FLazada-and-qoo10-banner2.jpg?alt=media&token=3154e91f-1e04-4859-a585-673deec36699)]  d:h-screen bg-cover bg-center bg-no-repeat p:h-max">
        <div className="w-[90%] flex justify-end  mx-auto items-center h-max py-5 ">
          <div>
            <h1 className="text-[35px] font-light text-center ">
              Bây giờ bạn có thể Mua Khóa cửa kỹ thuật số Gotter thông qua{" "}
              <br /> Cửa hàng trực tuyến của chúng tôi{" "}
            </h1>
            <div className="grid p:grid-cols-2 d:grid-cols-3 gap-10 mt-10">
              {LazadaItems.map((items: any, idx: number) => (
                <div key={idx}>
                  <StoresCart Data={items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" p:h-max d:h-[120vh] bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2FHome-Page-Comex-2018-promotion-1-e1537869132409.jpg?alt=media&token=34b20143-c027-4a34-b89d-6e2e4fd993e0)] bg-cover bg-center">
        <h1 className=" w-full text-center p:text-[23px] d:text-[35px] font-bold text-white  my-14">
          Giới thiệu khóa cửa kỹ thuật số WiFi PUSH PULL mới của chúng tôi.{" "}
          <br />
          Trải nghiệm các chương trình khuyến mãi mới nhất của chúng tôi về khóa
          cửa mới, <br />
          nhà thông minh và camera an ninh
        </h1>
      </div> */}
      <div className="h-max">
        <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fbackground_blue_home.jpg?alt=media&token=4bf0211e-8cf6-44f3-8480-90266d248ff3)]">
          <div className="py-10 p:w-auto d:w-[1200px] mx-auto flex flex-col items-center gap-10">
            <div className="w-[410px] ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/z4857624576504_ac9ec48714b2f15e4334de232c67f16f-removebg-preview.png?alt=media&token=b5151c7b-e800-4bb9-950e-df5f83ba0226"
                alt="Gotter logo"
                className="w-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-[#00d8ff] text-[35px] font-bold ">
                Khóa Cửa Kỹ Thuật Số & Sản Phẩm Bảo Mật Thông Minh Gotter
              </h1>
              <h2 className="text-[18px] text-white mt-5">
                Chúng tôi đang đi đầu cho một lối sống an toàn và tiện lợi ,
                Gotter tự hào là một nhà lãnh đạo thị trường trong ngành Khóa
                cửa số và <br /> Cam kết giải quyết mọi nhu cầu bảo mật của bạn.
              </h2>
            </div>
            <div className="flex text-white">
              <div className="py-3 bg-mainblue px-8 rounded-full uppercase">
                Xem thêm
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fbackground_blue_home2.jpg?alt=media&token=c1d7b840-a198-47d3-a92c-af2eec5e9eca)]">
          <div className="text-center py-20">
            <h1 className="text-[#00d8ff] text-[35px] font-bold ">
              Bảo mật phù hợp với công nghệ của nó
            </h1>
            <h2 className="text-[18px] text-white mt-5">
              Giới thiệu khái niệm khóa cửa kỹ thuật số PUSH PULL đầu tiên trên
              thế giới, giúp cuộc sống của bạn trở nên dễ dàng hơn nhiều.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
