import { useNavigate } from "react-router-dom";
import { InputLable } from "./ForgotpassCardStyles";
import { ForgotPassCardHeader } from "./ForgotpassCardStyles";
import { H1 } from "./ForgotpassCardStyles";
import { SendEmailButton } from "./ForgotpassCardStyles";
import { GoToLoginPageContainer } from "./ForgotpassCardStyles";
import { SendEmailContainer } from "./ForgotpassCardStyles";
import { H3 } from "./ForgotpassCardStyles";
import { Input } from "./ForgotpassCardStyles";
import { InputContainer } from "./ForgotpassCardStyles";
import { ForgotPassCardContainer } from "./ForgotpassCardStyles";

export const ForgotPasswordCard = () => {
  const nav = useNavigate();
  return (
    <ForgotPassCardContainer>
      <ForgotPassCardHeader>
        <H3>Forgot Password</H3>
      </ForgotPassCardHeader>
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
    </ForgotPassCardContainer>
  );
};
