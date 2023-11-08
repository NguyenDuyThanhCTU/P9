import React, { useState, useEffect } from "react";
import { useData } from "../../../../Context/DataProviders";
import { useParams } from "react-router-dom";
import ProductCard from "../Items/ProductCard";

const ComboProduct: React.FC = () => {
  const [sortProducts, setSortPoroducts] = useState<any>([]);
  const [Type, setType] = useState("");
  const { Products, productTypes } = useData();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const sortType = productTypes.filter((item: any) =>
        item.typeUrl.includes(id)
      );

      if (sortType) {
        setType(sortType[0].type);
      }
      const sort = Products.filter((item: any) => item.typeUrl.includes(id));
      if (sort) {
        setSortPoroducts(sort);
      }
    } else {
      setType("Tất cả Combo sản phẩm");
      setSortPoroducts(
        Products.filter((items: any) =>
          items.parentUrl.includes("combo-san-pham")
        )
      );
    }
  }, [id, Products]);

  return (
    <div>
      <div>
        <div className="h-max">
          <img
            src="https://www.samsungdigitallife.com/wp-content/uploads/2020/05/SAMSUNG-GATE-LOCK-COMBO-MAIN-BANNER-scaled.jpg"
            alt="combo product"
          />
        </div>
        <div className="bg-gradient-to-r from-[#4c4b97] to-[#b73a26]   flex items-center ">
          <div className="w-[1200px] mx-auto text-[40px] font-bold text-white uppercase text-center py-20">
            {Type}
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
      </div>
    </div>
  );
};

export default ComboProduct;
