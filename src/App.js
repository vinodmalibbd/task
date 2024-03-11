import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Dashboard";
import "./styles.css";
import { Forgotpassword } from "./Screens/ForgotPassword/Forgotpassword";
import { ForgotUsername } from "./Screens/ForgotUsername/ForgotUsername";
import { Login } from "./Screens/Login/Login";
import { Register } from "./Screens/Register/Register";
import { useContext } from "react";
import { Usercontext } from "./Contexts/UsercontextProvider";
import MobileService from "./Screens/DashboardMobile/MobileService";





export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Dashboard />
    },
    
 {
    path: "/forgotpass",
    element: <Forgotpassword />,
  },
  {
    path: "/forgotusername",
    element: <ForgotUsername />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/mobileservice",
    element: <MobileService />,
  }]);
  return <>
  
   <RouterProvider router={router} />
   
  </>
}
