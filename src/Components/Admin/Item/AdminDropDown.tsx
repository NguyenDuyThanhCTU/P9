import React from "react";
import { useStateProvider } from "../../../Context/StateProvider";
import AddPost from "./DropDownItem/AddPost";
import AddType from "./DropDownItem/AddType";
import AddProduct from "./DropDownItem/AddProduct";
import ProductDetail from "./DropDownItem/ProductDetail";

import AddBranch from "./DropDownItem/AddBranch";

import AddChildrenType from "./DropDownItem/AddChildrenType";

const AdminDropDown = () => {
  const { isDropDown } = useStateProvider();
  return (
    <div
      className={`duration-300 absolute left-0 right-0  ${
        isDropDown === "" ? "h-0" : "h-[100vh]"
      }`}
    >
      {isDropDown === "add-types" ? (
        <AddType />
      ) : isDropDown === "add-children-type" ? (
        <AddChildrenType />
      ) : isDropDown === "add-post" ? (
        <AddPost />
      ) : isDropDown === "add-product" ? (
        <AddProduct />
      ) : isDropDown === "add-branch" ? (
        <AddBranch />
      ) : isDropDown === "product-detail" ? (
        <ProductDetail />
      ) : null}
    </div>
  );
};

export default AdminDropDown;
