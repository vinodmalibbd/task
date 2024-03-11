import { useNavigate } from "react-router-dom";
import { H1 } from "./RegisterCardStyles";
import { InputContainer } from "./RegisterCardStyles";
import { Span } from "./RegisterCardStyles";
import { LoginNowContainer } from "./RegisterCardStyles";
import { RegisterButton } from "./RegisterCardStyles";
import { Input } from "./RegisterCardStyles";
import { RegisterButtonContainer } from "./RegisterCardStyles";
import { InputLable } from "./RegisterCardStyles";
import { RegisterForm } from "./RegisterCardStyles";
import { H3 } from "./RegisterCardStyles";
import { RegisterHeader } from "./RegisterCardStyles";
import { RegisterContainer } from "./RegisterCardStyles";

export const RegisterCard = () => {
  const nav = useNavigate();
  return (
    <>
      <RegisterContainer>
        <RegisterHeader>
          <H3>Register To</H3>
          <H1>Business</H1>
          <H3>Account</H3>
        </RegisterHeader>
        <RegisterForm>
          <InputContainer>
            <InputLable>
              <H3>Username</H3>
            </InputLable>
            <Input type="text" placeholder="Enter Username" />
          </InputContainer>
          <InputContainer>
            <InputLable>
              <H3>Email</H3>
            </InputLable>
            <Input type="email" placeholder="Enter Username" />
          </InputContainer>
          <InputContainer>
            <InputLable>
              <H3>Password</H3>{" "}
            </InputLable>
            <Input type="password" placeholder="Enter Password" />
          </InputContainer>
          <InputContainer>
            <InputLable>
              <H3>Confirm Password</H3>{" "}
            </InputLable>
            <Input type="password" placeholder="Enter Password" />
          </InputContainer>
          <RegisterButtonContainer>
            <RegisterButton>Log In</RegisterButton>
          </RegisterButtonContainer>
          <LoginNowContainer>
            Already Have An Account{" "}
            <Span onClick={() => nav("/login")}>LogIn Now ?</Span>
          </LoginNowContainer>
        </RegisterForm>
      </RegisterContainer>
    </>
  );
};
