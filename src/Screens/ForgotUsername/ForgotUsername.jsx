import { ForgotUsernameContainer } from "./ForgotUsernameStyles";
import { Header } from "../../Components/Header/Header.jsx";
import { MainContrainer } from "../../Components/MainContainer/MainContainer.jsx";
import { checkuser, checkuserInStore } from "../../Utils/Checkuser.js";
export const ForgotUsername = () => {
  // checkuser()
  checkuserInStore()
  return (
    <>
      <ForgotUsernameContainer>
        <Header />
        <MainContrainer ActiveCard="forgotusername" />
      </ForgotUsernameContainer>
    </>
  );
};
