import React, { useState, useEffect } from "react";
import { useData } from "../../../../Context/DataProviders";
import ProductCard from "./ProductCard";

const ProductDisplay = ({ id }: any) => {
  const [DataFetch, setDataFetch] = useState<any>([]);
  const [type, setType] = useState<any>([]);
  const { Products, productTypes } = useData();

  useEffect(() => {
    if (id) {
      const sort = Products.filter((items: any) => items.type === id);
      if (sort) {
        setDataFetch(sort);
      }
    } else {
      setDataFetch(Products);
    }
  }, [Products, id]);

  useEffect(() => {
    if (id) {
      const type = productTypes.filter((items: any) => items.parentUrl === id);
      if (type) {
        setType(type);
      }
    } else {
      const type = productTypes.filter(
        (items: any) => items.parentUrl === "khoa-cua-dien-tu"
      );
      if (type) {
        setType(type);
      }
    }
  }, [id]);

  console.log(type);

  return (
    <div className="">
      <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2018/03/productpgbg.jpg)] bg-center bg-cover h-[200px] flex justify-center items-center">
        <div className="flex">
          {type.map((items: any, idx: number) => (
            <>
              {" "}
              <h2 className="text-pink-400 text-[32px] font-bold">
                {idx !== 0 && <span>/</span>} {items.type}{" "}
              </h2>
            </>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-5">
        {DataFetch.length > 0 && (
          <div className="grid grid-cols-4">
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
