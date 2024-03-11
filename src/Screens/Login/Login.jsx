import { useContext, useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { MainContrainer } from "../../Components/MainContainer/MainContainer";
import { Usercontext } from "../../Contexts/UsercontextProvider";
import { LoginContainer } from "./LoginStyles";
import { useNavigate } from "react-router-dom";
import { checkuser, checkuserInStore } from "../../Utils/Checkuser";

export const Login = () => {
  // checkuser();
  checkuserInStore()
  return (
    <>
      <LoginContainer>
        <Header />
        <MainContrainer ActiveCard="login" />
      </LoginContainer>
    </>
  );
  
};
