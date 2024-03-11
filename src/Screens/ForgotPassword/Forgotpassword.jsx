import { useSelector } from "react-redux";
import { Header } from "../../Components/Header/Header.jsx";
import { MainContrainer } from "../../Components/MainContainer/MainContainer.jsx";
import { checkuser, checkuserInStore } from "../../Utils/Checkuser.js";
import { ForgotpasswordContainer } from "./ForgotpasswordStyles.js";
import { useNavigate } from "react-router-dom";

export const Forgotpassword = () => {
  // checkuser()
  checkuserInStore()
    return (
      <>
      <ForgotpasswordContainer>
        <Header />
        <MainContrainer ActiveCard="forgotpass" />
      </ForgotpasswordContainer>
    </>
  );

};
