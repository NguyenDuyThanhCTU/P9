import Admin from "../Components/Admin/Admin";
import Contact from "../Components/Client/Contact/Contact";
import Home from "../Components/Client/Home/Home";
import Project from "../Components/Client/Project/Project";
import Promotion from "../Components/Client/Promotion/Promotion";
import Support from "../Components/Client/Support/Support";

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
    path: "/du-an",
    component: Project,
    Layout: ClientLayout,
  },
  {
    path: "/ho-tro",
    component: Support,
    Layout: ClientLayout,
  },
  {
    path: "/lien-he",
    component: Contact,
    Layout: ClientLayout,
  },
  {
    path: "/bai-viet/:id",
    component: PostDetail,
    Layout: ClientLayout,
  },
];
