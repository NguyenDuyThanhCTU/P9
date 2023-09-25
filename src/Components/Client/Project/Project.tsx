import React from "react";
import { projectItems } from "../../../Utils/temp";

const Project: React.FC = () => {
  return (
    <div>
      <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2018/03/projectsingaporebg.jpg)] h-[315px] flex items-center justify-center bg-center bg-cover">
        <h1 className="text-[#00d8ff] text-[42px] uppercase font-bold text-center">
          Các dự án của chúng tôi
        </h1>
      </div>
      <div className="flex flex-col gap-5 w-[1200px] mx-auto py-10 text-[20px]  font-normal text-gray-600">
        <p>
          <strong className="text-mainblue">
            Hanman International Pte Ltd
          </strong>{" "}
          has successfully completed hundreds of residential projects in
          Singapore, Malaysia, and South East Asia in supplying and installing
          smart door locks. For many of them, our digital door locks are
          integrated with various smart home systems. We are also an official
          partner of Singtel for Singtel’s smart home IOT services.
        </p>
        <p>
          For more information or project enquiries, please feel free to
          schedule an appointment for a presentation and live demonstration.{" "}
        </p>
        <p>
          <strong className="text-mainblue">Tel:</strong> (+65) 6564 4704,{" "}
          <strong className="text-mainblue">Email:</strong> SamsungSG@hanman.net
          or pjtmarketing@hanman.net
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
