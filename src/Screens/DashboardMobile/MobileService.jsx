import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HomePageContainer } from '../Dashboard/DashboardStyles';
import { DashBoardHeader } from '../../Components/DashboardHeader/DashBoardHeader';
import Dashboardmiddle from '../../Components/Dashboardmiddle/Dashboardmiddle';

export default function MobileService() {
  
    const nav=useNavigate()
  const user=useSelector(state=>state.user)
  if(user===null){
    nav("/login")
  }else{
    return (
      <HomePageContainer>
      <DashBoardHeader/>
      <Dashboardmiddle screenname={"mobileservice"}/>
    </HomePageContainer>
  );
}
}
