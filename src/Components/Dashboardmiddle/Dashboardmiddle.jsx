
import {
  DashboardMiddle,
  DashboardLeftMenu,
  LeftMenuItem,
  DashboardRightScreen,
} from "./DashboardmiddleStyles";
import { getuserFromStore } from "../../Utils/Checkuser";
import { DashboardLeftmenu } from "../DashboarLeftMenu/DashboardLeftMenu";
const Dashboardmiddle = ({screenname}) => {
  const user = getuserFromStore();
  return (
    <>
      <DashboardMiddle>
        <DashboardLeftmenu/>
        <DashboardRightScreen>
          {screenname=="home"&& user.first_name +" "+user.last_name+" "+ user.email}
          {screenname=="mobileservice"&&"mobileservice"}
        </DashboardRightScreen>
      </DashboardMiddle>
    </>
  );
};


export default Dashboardmiddle;
