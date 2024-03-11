import { DashboardLeftMenu, LeftMenuItem } from "../Dashboardmiddle/DashboardmiddleStyles"
import { IoHomeOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { CiWifiOn } from "react-icons/ci";
import { TbReportAnalytics } from "react-icons/tb";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Utils/Checkuser";
import { useDispatch } from "react-redux";
import { removeuser } from "../../Redux/Userslice";
export const DashboardLeftmenu=()=>{
    const nav=useNavigate()
    const dispatch=useDispatch();
    const logout=()=>{
      dispatch(removeuser())
      localStorage.removeItem("user")
    }
    return(
      <DashboardLeftMenu>
            <LeftMenuItem onClick={()=>nav("/")}>
              <IoHomeOutline />
            </LeftMenuItem>
            <LeftMenuItem onClick={()=>nav("/mobileservice")}>
              <CiMobile2 />
            </LeftMenuItem>
            <LeftMenuItem>
              <CiWifiOn />
            </LeftMenuItem>
            <LeftMenuItem>
              <TbReportAnalytics />
            </LeftMenuItem>
            <LeftMenuItem onClick={()=>logout()}>
  
              <IoMdExit />
            </LeftMenuItem>
          </DashboardLeftMenu>
    )
  }
  