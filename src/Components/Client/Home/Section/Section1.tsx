import React from "react";
import { useData } from "../../../../Context/DataProviders";

const Section1 = () => {
  const { SocialMedia } = useData();
  console.log(SocialMedia);
  return (
    <>
      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2FOnline-warranty_home_banner_bg2-scaled.jpg?alt=media&token=aa727913-6030-42b3-909f-b11414c9aecc)]  h-screen bg-cover bg-right ">
        <div className="flex p:items-end d:items-center h-full">
          <div className="p:bg-[rgba(255,255,255,0.66)] d:bg-[rgba(255,255,255,0.46)] p:max-w-full d:max-w-[40%] rounded-3xl p:ml-auto d:ml-32">
            <div className="font-Main text-mainred  flex flex-col gap-5 p:p-2 d:p-[60px] ">
              <h1 className=" text-[50px] font-bold">ĐĂNG KÝ BẢO HÀNH</h1>
              <p className="text-[#383838] text-[18px] font-thin ">
                Cảm ơn quý khách đã ủng hộ sản phẩm Khóa Cửa Điện Tử của Gotter.
                Vui lòng đăng ký bảo hành sản phẩm Digital Lock và điền thông
                tin chi tiết của bạn để hoàn tất đăng ký Bảo hành điện tử trong
                vòng 14 ngày kể từ ngày cài đặt để được hưởng phạm vi bảo hành
                toàn diện và trải nghiệm sau bán hàng.
              </p>
              <p className="font-bold ">
                Việc đăng ký bảo hành này chỉ dành cho những khách hàng
                Singapore mua hàng sau ngày 1 tháng 10 năm 2021 với chúng tôi
                hoặc đại lý được ủy quyền. Nếu việc mua hàng của bạn diễn ra
                trước ngày này, vui lòng gửi Thẻ bảo hành được cấp cho bạn trong
                quá trình cài đặt đến địa chỉ ghi trên Thẻ.
              </p>
              <div className="flex">
                <div
                  className="bg-gradient-to-b from-[#fbdc86] via-[#f0d17d] to-[#c0830b] hover:bg-gradient-to-t rounded-full text-[#c0830b]   border-[#c0830b] text-[18px] font-bold uppercase flex items-center py-3 px-10 border cursor-pointer"
                  onClick={() =>
                    window.open(`https://${SocialMedia[1]}`, "_blank")
                  }
                >
                  <span>Đăng ký ngay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fz4857496723979_053db4c3fad817691b8c7132c4fe8acf.jpg?alt=media&token=7e7d0490-92ab-406c-b918-af1eb5e7db15)] bg-no-repeat bg-cover min-h-screen flex items-center">
        <div className=" p:w-auto d:w-[1400px] mx-auto">
          <div className="flex justify-center items-start gap-8">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fz4857502667382_6d0f278c3b6c90a435bc1e17fb462ee1-removebg-preview.png?alt=media&token=91d8d831-2906-443c-a87f-d4a1df65ef03"
              alt="left follow banner"
              className="w-[35%] object-contain"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fz4857498571746_32ac0ec078301920da42600ba9ae693f-removebg-preview.png?alt=media&token=5729f3ff-1cb9-4d74-b833-8eb8680985a9"
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
                src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fz4856221670757_343f9d16b72cf740f5eb4ef79fc14a0c.jpg?alt=media&token=3560006e-2edf-4311-bd27-20a18a04712a"
                alt=""
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-5 mt-10 p-2">
              <h1 className="text-mainyellow text-[60px] leading-[85px] font-bold">
                Gotter Smart Lock
              </h1>
              <h2 className="text-mainblue  font-bold text-[40px] ">
                Cửa hàng ủy quyền
              </h2>
              <p className="text-[30px] text-white ">
                Đây là chứng nhận bán hàng chính thức <br />
                nhãn hiệu do Gotter SDS cấp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
