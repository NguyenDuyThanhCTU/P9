import React, { useState } from "react";
import ContactCard from "./Items/ContactCard";
import { useData } from "../../../Context/DataProviders";
import { notification } from "antd";
import Input from "../../Admin/Item/Input";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { FaFax } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { ContactData } = useData();

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    if (!phone || !name || !email || !title || !description) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      let data = {
        HọTên: name,
        Email: email,
        SĐT: phone,
        ĐC: address,
        NộiDung: description,
      };
      const response = await fetch(
        "https://formsubmit.co/ajax/thanhnd2512@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };
  return (
    <div>
      <div className="bg-[#eaeefc] ">
        <div className="p:w-auto d:w-[1200px] mx-auto flex flex-col gap-5 py-10 items-center text-center">
          <h1 className="text-mainblue text-[42px] uppercase font-bold ">
            Kết nối với chúng tôi{" "}
          </h1>
          <h3 className="text-[20px] font-light">
            CHÚNG TÔI MUỐN ĐƯỢC NGHE TỪ BẠN VÌ VẬY HÃY LIÊN HỆ NẾU BẠN CÓ BẤT KỲ
            CÂU HỎI HOẶC PHẢN HỒI NÀO.
          </h3>
        </div>
      </div>
      <div className="bg-blue-900 ">
        <div className="d:flex-row p:flex-col p:w-auto d:w-[1200px] mx-auto flex  gap-5 py-10 items-center">
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

      <div className="bg-[url(https://www.samsungdigitallife.com/wp-content/uploads/2021/10/contact-us-banner_bg-scaled.jpg)] h-max bg-no-repeat bg-cover">
        <div className="d:flex-row p:flex-col p:w-auto d:w-[1200px] mx-auto flex  gap-5 py-10 items-start">
          <div className=" flex-[60%] g bg-[rgba(255,255,255,0.46)] rounded-3xl h-full">
            <div className="p-5 grid grid-cols-2 gap-5 h-full">
              <div className=" bg-purple-900 text-white font-bold text-[30px] py-2 rounded-2xl col-span-2">
                <h2 className="text-center">Thắc mắc chung</h2>
              </div>

              <div className="bg-white flex flex-col items-center gap-5 py-4">
                <div className="w-[60%]">
                  <img
                    src="https://www.samsungdigitallife.com/wp-content/uploads/2021/11/customer-service2.png"
                    alt="contact"
                    className="w-full"
                  />
                </div>
                <h3 className="text-[24px] font-semibold text-center">
                  HỖ TRỢ BÁN HÀNG
                </h3>
                <div className="flex ">
                  <div className="py-3 bg-purple-950 text-white font-semibold px-6 rounded-full uppercase">
                    Liên hệ
                  </div>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center gap-5 py-4">
                <div className="w-[60%]">
                  <img
                    src="https://www.samsungdigitallife.com/wp-content/uploads/2021/11/customer-service2.png"
                    alt="contact"
                    className="w-full"
                  />
                </div>
                <h3 className="text-[24px] font-semibold text-center">
                  HỖ TRỢ KỸ THUẬT
                </h3>
                <div className="flex ">
                  <div className="py-3 bg-purple-950 text-white font-semibold px-6 rounded-full uppercase">
                    Liên hệ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[40%] bg-[rgba(255,255,255,0.46)] rounded-3xl">
            <div className="p-5 flex flex-col gap-7">
              <div className=" bg-purple-900 text-white font-bold text-[30px] py-2 rounded-2xl">
                <h2 className="text-center">HỖ TRỢ KHẨN CẤP</h2>
              </div>
              <div className="bg-white flex flex-col items-center gap-5 py-4">
                <div className="w-[60%]">
                  <img
                    src="https://www.samsungdigitallife.com/wp-content/uploads/2021/11/customer-service2.png"
                    alt="contact"
                    className="w-full"
                  />
                </div>
                <h3 className="text-[24px] font-semibold">
                  GỌI CHO CHÚNG TÔI NGAY
                </h3>
                <div className="flex ">
                  <div className="py-3 bg-purple-950 text-white font-semibold px-6 rounded-full ">
                    {ContactData.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src={ContactData.location}
          className="w-screen h-[50vh]"
          loading="lazy"
        ></iframe>
      </div>

      <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2018/02/contactusbackground-1.jpg)] bg-no-repeat bg-cover h-max bg-center py-10 ">
        <div className="grid p:grid-cols-1 d:grid-cols-2 p:w-auto d:w-[1200px] mx-auto py-10">
          <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2018/02/contactusbg2.jpg)] flex flex-col items-center p-10 gap-10 ">
            <div>
              <img
                src="https://samsungdigitallife.com/wp-content/uploads/2018/02/singaicon.png"
                alt="logo"
              />
            </div>
            <div className="text-[26px] font-bold text-center text-white">
              <h3>HANMAN INTERNATIONAL PTE LTD SINGAPORE</h3>
            </div>
            <div className="flex flex-col gap-5 text-[22px] text-white ">
              <div className="flex items-center gap-5 ">
                <div className="bg-slate-300 text-mainbluerounded-full text-[50px] p-2 rounded-full text-mainblue">
                  <CiLocationOn />
                </div>
                <p>{ContactData.address}</p>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="bg-slate-300 text-mainbluerounded-full text-[50px] p-2 rounded-full text-mainblue">
                  <AiTwotonePhone />
                </div>
                <p>{ContactData.phone}</p>
              </div>
              {/* <div className="flex items-center gap-5 ">
                <div className="bg-slate-300 text-mainbluerounded-full text-[50px] p-2 rounded-full text-mainblue">
                  <FaFax className="p-2" />
                </div>
                <p>+65-6258 3080</p>
              </div> */}
              <div className="flex items-center gap-5 ">
                <div className="bg-slate-300 text-mainbluerounded-full text-[50px] p-2 rounded-full text-mainblue">
                  <AiOutlineMail className="p-2" />
                </div>
                <p>{ContactData.gmail}</p>
              </div>
            </div>
          </div>
          <div className="bg-white ">
            <form
              onSubmit={HandleSubmit}
              className="flex flex-col gap-3 mb-5 p-10 w-full h-full shadow-xl"
            >
              <Input
                text="Họ Tên(*)"
                Value={name}
                setValue={setName}
                Input={true}
              />
              <Input
                text="Email"
                Value={email}
                setValue={setEmail}
                Input={true}
              />
              <Input
                text="Điện thoại(*)"
                Value={phone}
                setValue={setPhone}
                Input={true}
              />
              <Input
                text="Địa chỉ(*)"
                Value={address}
                setValue={setAddress}
                Input={true}
              />
              <Input
                text="Chủ đề"
                Value={title}
                setValue={setTitle}
                Input={true}
              />
              <Input
                text="Nội dung(*)"
                Value={description}
                setValue={setDescription}
                Input={false}
              />
              <div className=" ">
                <button
                  type="submit"
                  className="uppercase py-2 px-6 bg-maincontent rounded-full text-white cursor-pointer hover:bg-main bg-green-500 hover:bg-green-600"
                >
                  gửi đi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="p:w-auto d:w-[1200px] flex mx-auto gap-10 items-center py-10 justify-center">
        <div className="mx-16">
          <img
            src="https://samsungdigitallife.com/wp-content/uploads/2018/02/businesshours.png"
            alt="work-time"
          />
        </div>
        <div className="text-[24px] flex flex-col gap-5">
          <h2>Giờ làm việc của chúng tôi:</h2>
          <h2 className="font-semibold">{ContactData.worktime}</h2>
          {/* <p className="italic text-[18px] text-gray-600">
            (Closed on Sunday and Public Holiday)
          </p> */}
        </div>
      </div>

      <div className="bg-[#ffd5d7] ">
        <div className="p:w-auto d:w-[1200px] mx-auto flex py-10 d:flex-row p:flex-col p-2">
          <div className="w-[100%] flex-1">
            <img
              src="https://www.samsungdigitallife.com/wp-content/uploads/2018/02/outofservicefin-600x406.png"
              alt="not support"
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-[30px] py-5 text-red-500">
              NO SUPPORT
            </h2>
            <div className="flex flex-col gap-4 text-[22px] font-light">
              <p>
                Chúng tôi chỉ cung cấp hỗ trợ kỹ thuật cho những khách hàng
                Singapore và Malaysia mua Khóa cửa kỹ thuật số SAMSUNG từ chúng
                tôi hoặc các đại lý được ủy quyền của chúng tôi.
              </p>
              <p>
                Nếu bạn không phải là khách hàng của chúng tôi và cần hỗ trợ kỹ
                thuật, vui lòng gọi đến nơi bạn đã mua hàng hoặc nhà phân phối
                được ủy quyền tại quốc gia của bạn. Rất tiếc, chúng tôi không có
                nghĩa vụ phải cung cấp bất kỳ sự trợ giúp nào.
              </p>
            </div>
            <div className="flex mt-10">
              <div className="bg-red-400 py-2 px-6 rounded-full uppercase text-red-800 border-red-800 border font-semibold">
                Tìm hiểu tại sao?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
