import { FaTh, FaRegChartBar, FaUserFriends ,FaDolly } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Add Order",
    icon: <BiImageAdd />,
    path: "/add-order",
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Orders",
    icon: <FaDolly />,
    path: "/order",
  },
  {
    title: "Customer",
    icon: <FaUserFriends />,
    path: "/contact-us",
  },
];

export default menu;
