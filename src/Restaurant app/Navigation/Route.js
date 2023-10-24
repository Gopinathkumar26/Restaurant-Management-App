import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from '../Pages/Login/Login';
import ManagerLogin from '../Pages/Login/ManagerLogin';
import OwnerLogin from '../Pages/Login/OwnerLogin';
import ManagerHome from '../Pages/Home/ManagerHome';
import CustomerMenu from '../Pages/Menu/CustomerMenu';
import OtpLogin from '../Pages/Login/OtpLogin';
import OrderMenu from '../Pages/Menu/OrderMenu';
import Welcome from '../Pages/Menu/Welcome';
//import DumMenu from '../Pages/Menu/ManagerMenu/DumMenu';
import Orders from '../Pages/Menu/ManagerMenu/Orders';
import Kitchen from '../Pages/Menu/ManagerMenu/Kitchen';
import Employees from '../Pages/Menu/Employees';

const Route = createBrowserRouter([
    {path: "/", element: <Login/>},
    {path: "/ownerlogin", element: <OwnerLogin/>},
    {path: "/managerlogin", element: <ManagerLogin/>},
    {path: "/managerhome", element: <ManagerHome/>},
    {path: "/otplogin", element: <OtpLogin/>},
    {path: "/otplogin/customermenu", element: <CustomerMenu/>},
    {path: "/otplogin/customermenu/ordermenu", element: <OrderMenu/>},
    {path: "/otplogin/customermenu/ordermenu/welcome", element: <Welcome/>},
    //{path: "/dummenu", element: <DumMenu/>},
    {path: "/orders", element: <Orders/>},
    {path: "/kitchen", element: <Kitchen/>},
    {path: "/employees", element: <Employees/>},
  ]);

export default Route;