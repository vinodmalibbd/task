import { Header } from "../../Components/Header/Header";
import { MainContrainer } from "../../Components/MainContainer/MainContainer";
import { checkuserInStore } from "../../Utils/Checkuser";
import { RegisterContainer } from "./RegisterStyle";

export const Register = () => {
  checkuserInStore()
  return (
    <RegisterContainer>
      <Header />
      <MainContrainer ActiveCard="register" />
    </RegisterContainer>
  );
};
