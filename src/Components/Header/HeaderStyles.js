import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: white;
  position: sticky;
  color: black;
`;
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 60px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 60px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HeaderItem = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Menu = styled.div`
  width: 20%;
  height: 100%;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const LogoContainer = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const H2 = styled.div`
  font-size: 20px;
`;
export const PopUpMenu = styled.div`
  width: 100%;
  height: 100vh; /* Full height */
  display: none; /* Hide by default */
  position: fixed;
  top: 0;
  right: 0;

  background-color: black;
  color: white;
  z-index: 999; /* Ensure the menu is on top of other elements */

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) =>
      isOpen ? "flex" : "none"}; /* Show when isOpen is true */
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
  }
`;

export const PopupMenuItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border-bottom: 1px solid white;
`;
