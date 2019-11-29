/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";
import Icons from "./views/Icons.jsx";
import Map from "./views/Map.jsx";
import Notifications from "./views/Notifications.jsx";
import Rtl from "./views/Rtl.jsx";
import User from "./views/User.jsx";
import Typography from "./views/Typography.jsx";
import UserProfile from "./views/UserProfile.jsx";
import Register from './views/Register'
import Login from './views/Login'
import Meeting from './views/Meeting'




var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "All users",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: User,
    layout: "/admin"
  }
];
export default routes;
