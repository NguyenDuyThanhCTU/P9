import React, { useState, useEffect } from "react";
import { useData } from "../../../../Context/DataProviders";
import ProductCard from "./ProductCard";

const ProductDisplay = ({ id }: any) => {
  const [DataFetch, setDataFetch] = useState<any>([]);
  const [type, setType] = useState<any>([]);
  const { Products, productTypes } = useData();

  useEffect(() => {
    if (id) {
      const type = productTypes.filter((items: any) => items.typeUrl === id);
      if (type) {
        setType(type);
        const sort = Products.filter((items: any) =>
          items.typeUrl.includes(id)
        );

        if (sort) {
          setDataFetch(sort);
        }
      }
    } else {
      const type = productTypes.filter(
        (items: any) => items.parentUrl === "khoa-cua-dien-tu"
      );
      if (type) {
        setType(type);
        setDataFetch(
          Products.filter(
            (items: any) => items.parentUrl === "khoa-cua-dien-tu"
          )
        );
      }
    }
  }, [id, Products]);

  return (
    <div className="">
      <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2018/03/productpgbg.jpg)] bg-center bg-cover p:h-max d:h-[200px] flex justify-center items-center">
        <div className="flex  ">
          {type.map((items: any, idx: number) => (
            <>
              {" "}
              <h2 className="text-pink-400 text-[32px] font-bold w-max py-10">
                {idx !== 0 && <span>/</span>} {items.type}
              </h2>
            </>
          ))}
          {/* <h2 className="text-pink-400 text-[32px] font-bold w-max d:hidden p:block py-10">
            Tất cả sản phẩm khóa cửa điện tử
          </h2> */}
        </div>
      </div>
      <div className="p:w-auto d:w-[1200px] mx-auto py-5 px-2">
        {DataFetch.length > 0 && (
          <div className="grid p:grid-cols-3 d:grid-cols-4 gap-5">
            {DataFetch.map((items: any, idx: number) => (
              <>
                {" "}
                <ProductCard Data={items} />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
