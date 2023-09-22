import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import { useStateProvider } from "../../../Context/StateProvider";

import DropDown from "../Item/DropDown";

import {
  HeaderItems,
  IconMapping,
  SocialMediaCustom,
  TypeProductItems,
} from "../../../Utils/item";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import {
  AiFillCaretRight,
  AiOutlineDown,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import HeaderFormDropDown from "../Item/HeaderFormDropDown";

const Header: React.FC = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(0);
  const [Keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { TradeMarkData, productTypes, ContactData, SocialMedia } = useData();
  const { setSearch } = useStateProvider();

  const HandleOpenSubMenu = (idx: number) => {
    if (idx === isOpenSubMenu) {
      setIsOpenSubMenu(0);
    } else {
      setIsOpenSubMenu(idx);
    }
  };

  function HandleSearch() {
    setSearch(Keyword);
  }

  return (
    <div className=" font-Main  p:h-auto shadow-lg shadow-gray-300">
      <div className="shadow-sm shadow-gray-200 h-[40px] ">
        <div className=" w-[1200px] mx-auto">
          <div className="flex mt-2 gap-2">
            {SocialMediaCustom.map((items, idx) => {
              let Icon = IconMapping[items.icon];
              let Point = SocialMedia[items.id];

              return (
                <div
                  key={idx}
                  className={`${items.style} p-2  rounded-full hover:scale-110 duration-300  text-gray-400 `}
                >
                  {Icon && (
                    <a href={`https://${Point}`} target="_blank">
                      <Icon />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto flex justify-between items-center d:h-[85px]  ">
        <div className="h-[85px] overflow-hidden py-2">
          <img
            src={TradeMarkData.websiteLogo}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div
            className={`${
              isOpen ? "hidden" : "flex"
            }  gap-10 uppercase font-semibold items-center h-[85px]`}
          >
            {HeaderItems.map((item, idx) => (
              <div
                className="hover:text-mainblue group duration-300 flex flex-col justify-between h-full relative"
                key={idx}
              >
                <div className="w-full h-1 bg-none group-hover:bg-mainblue duration-300"></div>
                <Link to={`/${item.link}`}>
                  <div className="flex justify-between items-center gap-2">
                    <div>{item.name}</div>
                    {item.link === "san-pham" && <AiOutlineDown />}
                  </div>
                </Link>
                <div></div>
                {item.link === "san-pham" && (
                  <div className="absolute hidden group-hover:block m-auto -left-[700px] top-[50px]">
                    <div className="bg-none h-10 w-full"></div>
                    <HeaderFormDropDown />
                  </div>
                )}
              </div>
            ))}
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <AiOutlineSearch />
            </div>
          </div>

          <div
            className={`${
              isOpen ? "w-[700px] " : "w-0"
            } duration-300  items-center flex justify-between gap-3`}
          >
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } bg-white text-black  w-full justify-between`}
            >
              <input
                type="text"
                className="outline-none p-2 w-full border"
                placeholder="Search..."
              />
              <div className="px-3 flex items-center text-white bg-black hover:bg-mainblue duration-300 text-[22px]  cursor-pointer">
                <AiOutlineSearch />
              </div>
            </div>
            <div
              className={`text-[24px] ${
                isOpen ? "block" : "hidden"
              } cursor-pointer`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <RxCross2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
