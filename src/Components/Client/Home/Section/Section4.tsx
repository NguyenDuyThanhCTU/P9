import React from "react";
import Commit from "../Items/Commit";

const Section4 = () => {
  const commitItems = [
    {
      topic: "Sự tiện lợi",
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
      topic: "Sự an toàn",
      items: [],
    },
    {
      topic: "Các chức năng hữu ích khác",
      items: [],
    },
  ];
  return (
    <>
      <div className="h-[190px] bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fproductpgbg.jpg?alt=media&token=d0f84f7d-205b-44b4-a7bc-c27e05de6ac8)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <h1 className="text-[52px] font-bold text-center text-white">
          Why Samsung Digital Door Lock?
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
