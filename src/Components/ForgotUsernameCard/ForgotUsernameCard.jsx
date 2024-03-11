import { useNavigate } from "react-router-dom";
import { InputContainer } from "./ForgotUsernameCardStyles";
import { SendEmailContainer } from "./ForgotUsernameCardStyles";
import { GoToLoginPageContainer } from "./ForgotUsernameCardStyles";
import { Input } from "./ForgotUsernameCardStyles";
import { H3 } from "./ForgotUsernameCardStyles";
import { SendEmailButton } from "./ForgotUsernameCardStyles";
import { InputLable } from "./ForgotUsernameCardStyles";
import { ForgotUsernameCardHeader } from "./ForgotUsernameCardStyles";
import { ForgotUsernameCardContainer } from "./ForgotUsernameCardStyles";

export const ForgotUsernameCard = () => {
  const nav = useNavigate();
  return (
    <ForgotUsernameCardContainer>
      <ForgotUsernameCardHeader>
        <H3>Forgot Username</H3>
      </ForgotUsernameCardHeader>
      <InputContainer>
        <InputLable>Email</InputLable>
        <Input type="Email" placeholder="Enter Email" />
      </InputContainer>
      <SendEmailContainer>
        <SendEmailButton>Submit</SendEmailButton>
      </SendEmailContainer>
      <GoToLoginPageContainer onClick={() => nav("/login")}>
        Go To Log In
      </GoToLoginPageContainer>
    </ForgotUsernameCardContainer>
  );
};
