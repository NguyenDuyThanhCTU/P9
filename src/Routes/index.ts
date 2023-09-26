import Admin from "../Components/Admin/Admin";
import Contact from "../Components/Client/Contact/Contact";
import Home from "../Components/Client/Home/Home";
import ComboProduct from "../Components/Client/Products/ComboProducts/ComboProduct";
import DigitalDoor from "../Components/Client/Products/DigitalDoor/DigitalDoor";
import DigitalDoorDetail from "../Components/Client/Products/DigitalDoor/DigitalDoorDetail";
import ProductDetail from "../Components/Client/Products/ProductDetail";
import SecurityCameras from "../Components/Client/Products/SecurityCameras/SecurityCameras";
import SmartHome from "../Components/Client/Products/SmartHome/SmartHome";
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
    path: "/khoa-cua-dien-tu",
    component: DigitalDoor,
    Layout: ClientLayout,
  },
  {
    path: "/khoa-cua-dien-tu/:id",
    component: DigitalDoorDetail,
    Layout: ClientLayout,
  },
  {
    path: "/combo-san-pham",
    component: ComboProduct,
    Layout: ClientLayout,
  },
  {
    path: "/combo-san-pham/:id",
    component: ComboProduct,
    Layout: ClientLayout,
  },
  {
    path: "/nha-thong-minh",
    component: SmartHome,
    Layout: ClientLayout,
  },
  {
    path: "/camera-an-ninh",
    component: SecurityCameras,
    Layout: ClientLayout,
  },
  {
    path: "/san-pham/:id",
    component: ProductDetail,
    Layout: ClientLayout,
  },
  {
    path: "/bai-viet/:id",
    component: PostDetail,
    Layout: ClientLayout,
  },
];
