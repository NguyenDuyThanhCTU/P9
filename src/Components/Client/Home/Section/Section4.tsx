import React from "react";
import Commit from "../Items/Commit";

const Section4 = () => {
  const commitItems = [
    {
      topic: "Tiện lợi",
      items: [
        {
          title: "Just One Step To Open",
          content:
            "Thiết kế tay cầm PUSH-PULL cải tiến giúp sử dụng thuận tiện hơn bao giờ hết.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fpushpull_home-icon2.jpg?alt=media&token=314feb32-fa66-460e-9a73-924965aebda8",
        },
        {
          title: "Automatic Locking",
          content:
            "Chỉ cần đóng cửa khi bạn đi ra ngoài. Nó tự động khóa cửa nên bạn không cần phải kiểm tra lại.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fautlockicon.jpg?alt=media&token=25187d77-5228-4d77-a3de-975eb2266665",
        },
        {
          title: "Auto Polling",
          content:
            "Thẻ RF hoặc thẻ khóa được xác thực ngay lập tức để truy cập mà không cần nhấn nút đánh thức.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fautopollings.jpg?alt=media&token=9ccbd83a-61c9-42ea-8c42-b28a4a04a3c1",
        },
        {
          title: "Dual Sided Latch",
          content:
            "Hoàn toàn có thể đảo ngược để mở cổng bên phải hoặc bên trái, tùy theo sở thích của chủ nhà. Có thể phù hợp với hầu hết các cửa hộ gia đình.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fdualsidelatch.jpg?alt=media&token=a126a7a1-c5bf-4fbe-b5e0-533f6a6608f6",
        },
      ],
    },
    {
      topic: "An toàn",
      items: [
        {
          title: "Touchpad Randomizer",
          content:
            "Ngăn kẻ trộm tìm ra mật khẩu của bạn thông qua vân tay để lại bằng cách nhấn hai chữ số đó",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Ftouchpads.jpg?alt=media&token=beb59e0c-cc8e-427f-83e6-36c735df409b",
        },
        {
          title: "Anti-Theft Mode",
          content:
            "Khi bạn thiết lập chế độ này, âm thanh báo động sẽ phát ra khi kẻ trộm cố gắng thoát ra khỏi cửa.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fantitheftmode.jpg?alt=media&token=83d2c313-7ad1-48e8-9e9b-2a376379f8f6",
        },
        {
          title: "Double Authentication",
          content:
            "Tính năng bảo mật nâng cao này yêu cầu phải nhập mật khẩu và vân tay/thẻ để mở khóa cửa.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fdouble-authentication.jpg?alt=media&token=225e29b8-3b6d-42be-932a-9baed7887899",
        },
        {
          title: "Fire Warning",
          content:
            "Chế độ này được kích hoạt khi phát hiện nhiệt độ cao bất thường trong nhà bạn. Bằng âm thanh báo động, nó giúp bạn nhận biết nguy cơ hỏa hoạn và tự mở khóa giúp bạn sơ tán khỏi nhà.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Ffirealarm.jpg?alt=media&token=ab750c75-ca18-4075-a632-7183c6be8826",
        },
      ],
    },
    {
      topic: "Chức năng khác",
      items: [
        {
          title: "Volume Adjustment",
          content:
            "Điều chỉnh âm lượng của khóa theo ý thích cá nhân của bạn, có thể là để tránh làm phiền người khác vào ban đêm,...",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fvolumecontrol.jpg?alt=media&token=f0a4cb68-50ca-4eac-887f-c353c9583a21",
        },
        {
          title: "9V Battery Backup",
          content:
            "Chỉ cần sử dụng pin 9V để cấp nguồn cho khóa từ bên ngoài trong trường hợp hết pin.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2F9vemergency-battaery.jpg?alt=media&token=36b0f05d-c30b-4294-b629-2fb6ae40d59a",
        },
        {
          title: "Low Battery Alert",
          content:
            "Báo pin yếu giúp bạn có nhiều thời gian và thuận tiện để thay pin, đảm bảo rằng khóa của bạn luôn luôn hoạt động.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Flowbatterywarning-signal.jpg?alt=media&token=ca4f1a48-c31d-4b6a-9594-a1c060e93ec3",
        },
        {
          title: "Interface with Gotter Connect",
          content:
            "Khóa tương tác với điện thoại Gotter hoặc hệ thống tự động dễ dàng mở khóa cửa",
          image:
            "https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2FInterface-with-samsung-smart-connect.jpg?alt=media&token=f22f3a97-4bfb-4d2a-b4dc-57544c6de33d",
        },
      ],
    },
  ];
  return (
    <>
      <div className="p:h-max d:h-[190px] bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fproductpgbg.jpg?alt=media&token=d0f84f7d-205b-44b4-a7bc-c27e05de6ac8)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <h1 className="text-[52px] font-bold text-center text-white">
          Tại sao nên chọn Khóa Cửa Kỹ Thuật Số Gotter?
        </h1>
      </div>
      <div className="py-5">
        {commitItems.map((item: any, idx: number) => (
          <div key={idx}>
            <Commit topic={item.topic} Data={item.items} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Section4;
