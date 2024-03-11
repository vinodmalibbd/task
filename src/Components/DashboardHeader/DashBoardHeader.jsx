import { FaRegUserCircle } from "react-icons/fa";
import {
  DashboardHeader,
  UserContainer,
  LogoContainer,
} from "./DashBoardHeaderStyles.js";
import { useState } from "react";
export const DashBoardHeader = () => {
  
  return (
    <DashboardHeader>
      <LogoContainer>MI</LogoContainer>
      <UserContainer onclick={()=>setDropdown(!dropdown)} >
        <FaRegUserCircle />
      </UserContainer>
      
    </DashboardHeader>
  );
};
