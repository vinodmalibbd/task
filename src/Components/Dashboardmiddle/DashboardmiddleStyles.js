import styled from "styled-components";
export const DashboardMiddle = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DashboardLeftMenu = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;

  margin-right: 10px;
`;
export const LeftMenuItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  margin-top: 10px;
  font-size: 22px;
  border-radius: 10px;
  cursor:pointer;
  &hover:{
    opacity:70%;
  }
`;
export const DashboardRightScreen = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
`;
