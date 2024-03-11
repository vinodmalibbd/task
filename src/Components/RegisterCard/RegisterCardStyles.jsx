import styled from "styled-components";
export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const RegisterHeader = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 100px;
  }
`;
export const H3 = styled.h3`
  color: black;
  text-transform: capitalize;
`;
export const H1 = styled.h3`
  color: black;
  font-size: 35px;
  letter-spacing: 14px;
  text-transform: uppercase;
  @media screen and (max-width: 400px) {
    letter-spacing: 5px;
  }
`;
export const RegisterForm = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputContainer = styled.div`
  width: 70%;
  height: 80px;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;
export const InputLable = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;
export const Span = styled.span`
  cursor: pointer;
  color: blue;
`;
export const Input = styled.input`
  width: 100%;
  height: 50%;

  padding-left: 20px;
  margin-bottom: 20px;
  border: 1px solid gray;
  outline: 1px solid gray;
`;

export const RegisterButtonContainer = styled.div`
  width: 70%;
  height: 80px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RegisterButton = styled.div`
  width: 100px;
  text-transform: capitalize;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: red;
`;
export const LoginNowContainer = styled.div`
  width: 70%;
  height: 80px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
