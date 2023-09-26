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
  const [Keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [Hidden, setHidden] = useState(false);

  const { TradeMarkData, SocialMedia, productTypes } = useData();
  const { setSearch } = useStateProvider();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementTop, setElementTop] = useState(50);
  const targetPosition = 1;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > targetPosition) {
      setElementTop(0);
    } else {
      setElementTop(50);
    }
  }, [scrollPosition]);

  function HandleSearch() {
    setSearch(Keyword);
  }

  return (
    <div className=" font-Main  p:h-auto shadow-lg shadow-gray-300 z-50 relative">
      <div className="d:flex flex-col p:hidden ">
        <div className="shadow-sm shadow-gray-200 h-[47px] ">
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
        <div
          className="bg-white  w-full d:h-[85px] flex justify-center fixed  duration-300 shadow-lg shadow-gray-300"
          style={{ top: `${elementTop}px` }}
        >
          <div className="w-[1200px] flex justify-between items-center d:h-[85px]  ">
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
                        {item.link === "khoa-cua-dien-tu" && <AiOutlineDown />}
                      </div>
                    </Link>
                    <div></div>
                    {item.link === "khoa-cua-dien-tu" && (
                      <div className="absolute h-0 bg-none group-hover:h-[800px] overflow-hidden  m-auto -left-[700px] top-[50px] duration-300 z-50">
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
      </div>
      <div className="p:block d:hidden w-full  ">
        <div className="flex justify-between  items-center ">
          <Link to="/">
            <img
              src={TradeMarkData.websiteLogo}
              alt="logo"
              className="h-[50px] m-5 "
            />
          </Link>
          <div className="flex items-center text-[60px]">
            {Hidden ? (
              <RxCross1
                className="bg-redPrimmary text-white p-2 "
                onClick={() => setHidden(!Hidden)}
              />
            ) : (
              <MdOutlineFormatListBulleted
                className="bg-redPrimmary text-white p-2 "
                onClick={() => setHidden(!Hidden)}
              />
            )}
          </div>
        </div>
        <div
          className={`${
            Hidden ? "h-screen" : "h-0 "
          } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-y-scroll`}
        >
          {HeaderItems.map((items: any, idx: any) => {
            const sort = productTypes.filter(
              (item: any) => item.parentUrl === items.link
            );

            return (
              <div key={idx}>
                <DropDown
                  idx={idx}
                  dropdown={sort}
                  content={items.name}
                  link={items.link}
                  setHidden={setHidden}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
