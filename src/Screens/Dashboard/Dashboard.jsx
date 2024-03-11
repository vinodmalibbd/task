import { HomePageContainer } from "./DashboardStyles.js";
import { DashBoardHeader } from "../../Components/DashboardHeader/DashBoardHeader";
import Dashboardmiddle from "../../Components/Dashboardmiddle/Dashboardmiddle.jsx";
import { useContext, useEffect } from "react";
import { Usercontext } from "../../Contexts/UsercontextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const nav=useNavigate()
  const user=useSelector(state=>state.user)
  if(user===null){
    nav("/login")
  }else{
    return (
      <HomePageContainer>
      <DashBoardHeader/>
      <Dashboardmiddle screenname={"home"}/>
    </HomePageContainer>
  );
}
};

export default Dashboard;
