import React from "react";
import Introduce from "../Items/Introduce";

const Section3: React.FC = () => {
  const ItroduceItems = [
    {
      background:
        "https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepage-unlockimage-shp-dp727.jpg?alt=media&token=18108495-6975-4b57-bdca-e6a2d0d5187a",
      icon: "https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepg_blutooth.png?alt=media&token=baa0eaa0-7268-4ef8-a55c-c2aed90c564c",
      title: "SMART OPEN",

      content:
        "Thực hiện mở khóa nhanh chóng và an toàn bằng cách mở khóa cửa bằng điện thoại thông minh của bạn.",
      type: "right",
      contentColor: "text-black",
      titleColor: "text-mainblue",
    },
    {
      background:
        "https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepage_pushmessage.jpg?alt=media&token=92850231-a037-45c3-8752-9e09035bd9ac",
      icon: "https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepg_pushmessage.png?alt=media&token=ebb9879a-b144-4aa8-822c-b035296c0d06",
      title: "SMART OPEN",
      content:
        "Nhận thông báo bất cứ khi nào thành viên trong gia đình bạn trở về an toàn",
      type: "left",
      contentColor: "text-black",
      titleColor: "text-[#22aac5]",
    },
    {
      background:
        "https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fdoorlock-touchscreen_home2.jpg?alt=media&token=ed289ad2-c9bd-4379-b300-937844858a7a",
      icon: "https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepg_keypad_icon2.png?alt=media&token=a3b7bfa1-7c7f-44df-aff1-7b8a483edcac",
      title: "TOUCH PAD",
      content:
        "Do màn hình cảm ứng rộng, thiết kế trở nên phong cách hơn và tốc độ nhận diện được cải thiện.",
      type: "right",
      contentColor: "text-white",
      titleColor: "text-[#0cd693]",
    },
    {
      background:
        "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Faccesslog_homepage-unlockimage-shp-dp727.jpg?alt=media&token=e8f4f40d-0d1c-44ee-ba3a-5b5127587b20",
      icon: "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fhomepg_inoutrec_icon2.png?alt=media&token=00e0476c-5aa0-4317-923f-eb3cc479f836",
      title: "IN/OUT LOG",
      content:
        "Nhật ký sự kiện truy cập giúp theo dõi ai rời đi hoặc về đến nhà.",
      type: "left",
      contentColor: "text-black",
      titleColor: "text-[#6142c6]",
    },
    {
      background:
        "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fhomepage_Family_secure3.jpg?alt=media&token=a45b520f-7ba0-455c-9e71-7647af987323",
      icon: "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fsecurityicon_home.png?alt=media&token=c0d91a39-0b28-48dc-967a-3ca6a62a0922",
      title: "Always Keeping Your Home Secured",
      content:
        "Với tính năng tự động khóa của chúng tôi, bạn có thể yên tâm rằng ngôi nhà và những người thân yêu của bạn luôn được an toàn.",
      type: "right",
      contentColor: "text-black",
      titleColor: "text-[#0cd693]",
    },
    {
      background:
        "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fdoorlock-security_home.jpg?alt=media&token=14b8f226-b888-4d84-8010-5f09d487ecb3",
      icon: "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fhomepg_Sillentmode_icon.png?alt=media&token=4b6e4f20-663f-46c9-bcd7-196156319f5b",
      title: "Silent Mode",
      content:
        "Bạn thường xuyên về nhà lúc nữa đêm? Hãy giúp những người thân yêu của bạn ngủ ngon khi mở cửa một cánh yên tĩnh bằng Chế độ im lặng.",
      type: "left",
      contentColor: "text-black",
      titleColor: "text-[#6142c6]",
    },
  ];
  return (
    <>
      {ItroduceItems.map((item, index) => (
        <>
          <Introduce
            background={item.background}
            icon={item.icon}
            title={item.title}
            content={item.content}
            type={item.type}
            contentColor={item.contentColor}
            titleColor={item.titleColor}
          />
        </>
      ))}
      {/* <div className="relative h-max">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepage-unlockimage-shp-dp727.jpg?alt=media&token=18108495-6975-4b57-bdca-e6a2d0d5187a"
          alt="lock image"
        />
        <div className="absolute w-full h-full flex top-0 gap-10">
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col gap-5 justify-center h-full ">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepg_blutooth.png?alt=media&token=baa0eaa0-7268-4ef8-a55c-c2aed90c564c"
                alt="blutooth"
              />
            </div>
            <div>
              <h1 className="text-mainblue text-[42px] font-bold">
                SMART OPEN
              </h1>
              <h2 className="text-[24px] font-light mt-5">
                Make a quick and safe entry by <br /> unlocking your door with
                your smartphone.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-max">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepage_pushmessage.jpg?alt=media&token=92850231-a037-45c3-8752-9e09035bd9ac"
          alt="lock image"
        />
        <div className="absolute w-full h-full flex top-0 gap-10 ">
          <div className="flex-1 flex flex-col gap-5 justify-center items-end h-full ">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepg_pushmessage.png?alt=media&token=ebb9879a-b144-4aa8-822c-b035296c0d06"
                alt="blutooth"
              />
            </div>
            <div className="text-right ">
              <h1 className="text-[#22aac5] text-[42px] font-bold">
                SMART OPEN
              </h1>
              <h2 className="text-[24px] font-light mt-5">
                Receive push notifications <br />
                whenever any of your <br />
                family members return safely
              </h2>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>

      <div className="relative h-max">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fdoorlock-touchscreen_home2.jpg?alt=media&token=ed289ad2-c9bd-4379-b300-937844858a7a"
          alt="lock image"
        />
        <div className="absolute w-full h-full flex top-0 gap-10">
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col gap-5 justify-center h-full ">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fhomepg_keypad_icon2.png?alt=media&token=a3b7bfa1-7c7f-44df-aff1-7b8a483edcac"
                alt="blutooth"
              />
            </div>
            <div>
              <h1 className="text-[#0cd693] text-[42px] font-bold">
                TOUCH PAD
              </h1>
              <h2 className="text-[24px] font-light mt-5 text-white">
                Due to the wide touchscreen, the design <br />
                becomes more stylish and the detection rate <br />
                gets improved.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-max">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Faccesslog_homepage-unlockimage-shp-dp727.jpg?alt=media&token=e8f4f40d-0d1c-44ee-ba3a-5b5127587b20"
          alt="lock image"
        />
        <div className="absolute w-full h-full flex top-0 gap-10">
          <div className="flex-1 flex flex-col gap-5 justify-center items-end h-full ">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fhomepg_inoutrec_icon2.png?alt=media&token=00e0476c-5aa0-4317-923f-eb3cc479f836"
                alt="blutooth"
              />
            </div>
            <div className="text-end">
              <h1 className="text-[#6142c6] text-[42px] font-bold">
                IN/OUT LOG
              </h1>
              <h2 className="text-[24px] font-light mt-5 text-black">
                An access event log that keeps <br />
                track on who leaves or arrives home
              </h2>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>

      <div className="relative h-max">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fhomepage_Family_secure3.jpg?alt=media&token=a45b520f-7ba0-455c-9e71-7647af987323"
          alt="lock image"
        />
        <div className="absolute w-full h-full flex top-0 gap-10">
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col gap-5 justify-center h-full ">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fsecurityicon_home.png?alt=media&token=c0d91a39-0b28-48dc-967a-3ca6a62a0922"
                alt="blutooth"
              />
            </div>
            <div>
              <h1 className="text-[#0cd693] text-[42px] font-bold">
                Always Keeping <br />
                Your Home Secured
              </h1>
              <h2 className="text-[24px] font-light mt-5 text-black">
                With our autolocking feature, you can rest assured that your
                home and loved ones are always safe. <br />
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-max">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fdoorlock-security_home.jpg?alt=media&token=14b8f226-b888-4d84-8010-5f09d487ecb3"
          alt="lock image"
        />
        <div className="absolute w-full h-full flex top-0 gap-10">
          <div className="flex-1 flex flex-col gap-5 justify-center items-end h-full ">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fhomepg_Sillentmode_icon.png?alt=media&token=4b6e4f20-663f-46c9-bcd7-196156319f5b"
                alt="blutooth"
              />
            </div>
            <div className="text-end">
              <h1 className="text-[#6142c6] text-[42px] font-bold">
                Silent Mode
              </h1>
              <h2 className="text-[24px] font-light mt-5 text-black">
                During the wee hours coming home? Save your loved ones some
                sleep and make a quiet entry using Silent Mode.
              </h2>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div> */}
    </>
  );
};

export default Section3;
