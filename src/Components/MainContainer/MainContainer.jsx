import { ForgotPasswordCard } from "../ForgotpassCard/ForgotPassCard";
import { ForgotUsernameCard } from "../ForgotUsernameCard/ForgotUsernameCard";
import { LoginCard } from "../LoginCard/LoginCard";
import { RegisterCard } from "../RegisterCard/RegisterCard";
import { CardContainer } from "./MainContainerStyles";
import { MainContainer } from "./MainContainerStyles";

export const MainContrainer = ({ ActiveCard }) => {
  return (
    <>
      <MainContainer>
        <CardContainer>
          {ActiveCard === "login" && <LoginCard />}
          {ActiveCard === "forgotpass" ? <ForgotPasswordCard /> : ""}
          {ActiveCard === "forgotusername" ? <ForgotUsernameCard /> : ""}
          {ActiveCard === "register" ? <RegisterCard /> : ""}
        </CardContainer>
      </MainContainer>
    </>
  );
};
