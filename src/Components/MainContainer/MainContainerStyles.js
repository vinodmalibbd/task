import styled from "styled-components";
export const MainContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    justify-content: center; // Adjust alignment for smaller screens
  }
`;

export const CardContainer = styled.div`
  width: 40%;
  height: 90%;
  background-color: white;
  margin-right: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: black;
  @media (max-width: 768px) {
    width: 80%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
