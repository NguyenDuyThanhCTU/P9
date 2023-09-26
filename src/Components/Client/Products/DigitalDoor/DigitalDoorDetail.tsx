import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../../Context/DataProviders";
import ProductCard from "../Items/ProductCard";

const DigitalDoorDetail: React.FC = () => {
  const [sortProducts, setSortPoroducts] = useState<any>([]);
  const [type, setType] = useState<any>("");
  const { Products, productTypes } = useData();
  const { id } = useParams();

  useEffect(() => {
    const sort = Products.filter((item: any) => item.typeUrl.includes(id));
    const sortType = productTypes.filter((item: any) => item.typeUrl === id);

    if (sortType) {
      setType(sortType[0]);
    }
    if (sort) {
      setSortPoroducts(sort);
    }
  }, [id, Products]);

  return (
    <>
      <div className="bg-[url(https://samsungdigitallife.com/wp-content/uploads/2016/11/product-pg_bg_blue_line.png)] h-max bg-cover bg-no-repeat">
        <div className="p:w-auto d:w-[1200px] mx-auto flex items-center gap-5">
          <div className="w-[60%]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2F124124.jpg?alt=media&token=278da032-019f-40f8-a729-b065678d6a30"
              alt="product"
              className="w-full"
            />
          </div>
          <div>
            <h2 className="uppercase text-mainblue text-[34px] font-bold">
              SAMSUNG DIGITAL <br /> DOOR LOCK
            </h2>
            <h3 className="font-bold text-[28px] ">({type.type})</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="p:w-auto d:w-[1200px] mx-auto py-10">
          {sortProducts.length > 0 ? (
            <div className="grid p:grid-cols-3 d:grid-cols-4 gap-5 px-2">
              {sortProducts.map((items: any, idx: number) => (
                <>
                  {" "}
                  <ProductCard Data={items} />
                </>
              ))}
            </div>
          ) : (
            <div className="w-full flex justify-center py-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fgsdfgsdfgsd.jpg?alt=media&token=b98b569d-9504-4c50-be02-f592535c3d53"
                alt="product not found"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DigitalDoorDetail;
