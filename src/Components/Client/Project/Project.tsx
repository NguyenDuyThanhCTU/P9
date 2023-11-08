import React from "react";
import { projectItems } from "../../../Utils/temp";
import { useData } from "../../../Context/DataProviders";

const Project: React.FC = () => {
  const { ContactData } = useData();
  return (
    <div>
      <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2018/03/projectsingaporebg.jpg)] h-[315px] flex items-center justify-center bg-center bg-cover">
        <h1 className="text-[#00d8ff] text-[42px] uppercase font-bold text-center">
          Các dự án của chúng tôi
        </h1>
      </div>
      <div className="flex flex-col gap-5 p:w-auto p-2 d:w-[1200px] mx-auto py-10 text-[20px]  font-normal text-gray-600">
        <p>
          <strong className="text-mainblue">Gotter</strong> đã hoàn thành thành
          công hàng trăm dự án nhà ở tại Singapore, Malaysia và Đông Nam Á trong
          việc cung cấp và lắp đặt khóa cửa thông minh. Đối với nhiều người
          trong số họ, khóa cửa kỹ thuật số của chúng tôi được tích hợp với
          nhiều hệ thống nhà thông minh khác nhau. Chúng tôi cũng là đối tác
          chính thức của Singtel cho các dịch vụ IOT nhà thông minh của Singtel.
        </p>
        <p>
          Để biết thêm thông tin hoặc yêu cầu về dự án, vui lòng đặt lịch hẹn để
          trao đổi trực tiếp.
        </p>
        <p className="flex flex-col">
          <strong className="text-mainblue">Tel:</strong> {ContactData.phone}
          <strong className="text-mainblue">Email:</strong> {ContactData.gmail}
        </p>
        <div className="grid grid-cols-4">
          {projectItems.map((item, index) => (
            <>
              <div className="w-full flex justify-center">
                <img src={item.image} alt="project" />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
