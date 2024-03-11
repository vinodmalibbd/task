import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoContainer } from "../Header/HeaderStyles";
import { LoginHeader, InputLable } from "./LoginCardStyles";
import {
  LoginContainer,
  H3,
  H1,
  LoginForm,
  Input,
  InputContainer,
  Span,
  RememberCheckBox,
  RememberMeContainer,
  LoginButtonContainer,
  LoginButton,
  RegisterNowContainer,
} from "./LoginCardStyles";
import { Usercontext } from "../../Contexts/UsercontextProvider";
import { useDispatch } from "react-redux";
import { setuser } from "../../Redux/Userslice";
import { setUserToLocalStorage } from "../../Redux/store";
import { userdata } from "../../Utils/tempdata";

export const LoginCard = () => {

  // const {addUser}=useContext(Usercontext)
  const nav = useNavigate();
  const dispatch=useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username==="vinodmali" && password==="vinod"){
      dispatch(setUserToLocalStorage(userdata))
      nav("/")
      // adduser({uname:username,pass:password})
    }else{
      alert("wrong credentials")

    }
  };
  return (
    <>
      <LoginContainer>
        <LoginHeader>
          <H3>Log in to your</H3>
          <H1>Business</H1>
          <H3>Account</H3>
        </LoginHeader>
        <LoginForm>
          <InputContainer>
            <InputLable>
              <H3>Username</H3>
              <Span onClick={() => nav("/forgotusername")}>
                Forgot Username ?
              </Span>
            </InputLable>
            <Input
              type="text"
              placeholder="Enter Username"
              required={true}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputLable>
              <H3>Password</H3>{" "}
              <Span onClick={() => nav("/forgotpass")}>Forgot Password ?</Span>
            </InputLable>
            <Input
              type="password"
              placeholder="Enter Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <RememberMeContainer>
            <RememberCheckBox
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <Span>Remember Me</Span>
          </RememberMeContainer>
          <LoginButtonContainer onClick={handleSubmit}>
            <LoginButton>Log In</LoginButton>
          </LoginButtonContainer>
          <RegisterNowContainer>
            Don't Have An Account
            <Span onClick={() => nav("/register")}>Register Now ?</Span>
          </RegisterNowContainer>
        </LoginForm>
      </LoginContainer>
    </>
  );
};
