import Admin from "../Components/Admin/Admin";
import Home from "../Components/Client/Home/Home";
import Promotion from "../Components/Client/Promotion/Promotion";

import PostDetail from "../Components/Item/PostDetail";
import Login from "../Components/Login/Login";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import ClientLayout from "../Layout/ClientLayout/ClientLayout";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: AdminLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: AdminLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
  {
    path: "/khuyen-mai",
    component: Promotion,
    Layout: ClientLayout,
  },
  {
    path: "/bai-viet/:id",
    component: PostDetail,
    Layout: ClientLayout,
  },
];
