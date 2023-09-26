import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2FOnline-warranty_home_banner_bg2-scaled.jpg?alt=media&token=aa727913-6030-42b3-909f-b11414c9aecc)]  h-screen bg-cover bg-right ">
        <div className="flex p:items-end d:items-center h-full">
          <div className="p:bg-[rgba(255,255,255,0.66)] d:bg-[rgba(255,255,255,0.46)] p:max-w-full d:max-w-[40%] rounded-3xl p:ml-auto d:ml-32">
            <div className="font-Main text-mainred  flex flex-col gap-5 p:p-2 d:p-[60px] ">
              <h1 className=" text-[50px] font-bold">ĐĂNG KÝ BẢO HÀNH</h1>
              <p className="text-[#383838] text-[18px] font-thin ">
                Cảm ơn quý khách đã ủng hộ sản phẩm Khóa Cửa Điện Tử của
                Samsung. Vui lòng đăng ký bảo hành sản phẩm Digital Lock và điền
                thông tin chi tiết của bạn để hoàn tất đăng ký Bảo hành điện tử
                trong vòng 14 ngày kể từ ngày cài đặt để được hưởng phạm vi bảo
                hành toàn diện và trải nghiệm sau bán hàng.
              </p>
              <p className="font-bold ">
                Việc đăng ký bảo hành này chỉ dành cho những khách hàng
                Singapore mua hàng sau ngày 1 tháng 10 năm 2021 với chúng tôi
                hoặc đại lý được ủy quyền. Nếu việc mua hàng của bạn diễn ra
                trước ngày này, vui lòng gửi Thẻ bảo hành được cấp cho bạn trong
                quá trình cài đặt đến địa chỉ ghi trên Thẻ.
              </p>
              <div className="flex">
                <div className="bg-gradient-to-b from-[#fbdc86] via-[#f0d17d] to-[#c0830b] hover:bg-gradient-to-t rounded-full text-[#c0830b]   border-[#c0830b] text-[18px] font-bold uppercase flex items-center py-3 px-10 border cursor-pointer">
                  <span>Đăng ký ngay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Finstagram-backgrond-opti-scaled.jpg?alt=media&token=17816852-b4a6-4e41-bbad-736c0d3e8da9)] bg-no-repeat bg-cover min-h-screen flex items-center">
        <div className=" p:w-auto d:w-[1400px] mx-auto">
          <div className="flex justify-center items-start gap-8">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Finsta_button_text3.png?alt=media&token=eff4354f-2ac3-4ba3-af45-241890c6b28e"
              alt="left follow banner"
              className="w-[35%] object-contain"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Finsta-icon.png?alt=media&token=0cf56ab2-c048-4438-a355-130ad9c28a4a"
              alt="right follow banner"
              className="w-[20%] object-contain"
            />
          </div>

          <div className="text-white font-thin text-[50px]">
            <h1 className="text-center uppercase ">
              THEO DÕI TRANG Instagram CỦA CHÚNG TÔI ĐỂ NHẬN <br />
              CẬP NHẬT SẢN PHẨM MỚI NHẤT
            </h1>
          </div>
          <div className="flex mt-14 justify-center">
            <div className="bg-gradient-to-b  from-[#683aa5]   to-[#ed536a] hover:from-[#340470] hover:to-[#b23a62] rounded-full text-white  border-2 border-white text-[18px] font-bold uppercase flex items-center py-3 px-10  cursor-pointer">
              <span>Đăng ký ngay</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fbgblueforhom3-scaled.jpg?alt=media&token=3fe75dca-9bb3-4f4b-b75e-22d31e4c76e5)] h-screen bg-cover bg-center bg-no-repeat font-Main">
        <div className="p:w-auto d:w-[1250px] mx-auto ">
          <div className="flex justify-start items-center gap-10 d:flex-row p:flex-col">
            <div className="p:max-w-[50%] d:max-w-[450px] max-h-[675px]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fauthorised-store-medal3-e1602155074159-600x899.png?alt=media&token=41497896-d939-420c-b2eb-5b41cfafa237"
                alt=""
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-5 mt-10 p-2">
              <h1 className="text-mainyellow text-[60px] leading-[85px] font-bold">
                Samsung Smart Lock
              </h1>
              <h2 className="text-mainblue  font-bold text-[40px] ">
                Cửa hàng ủy quyền
              </h2>
              <p className="text-[30px] text-white ">
                Đây là chứng nhận bán hàng chính thức <br />
                nhãn hiệu do Samsung SDS cấp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
