import {
  H2,
  LogoContainer,
  Menu,
  PopUpMenu,
  RightHeader,
  PopupMenuItem,
} from "./HeaderStyles";
import { HeaderItem } from "./HeaderStyles";
import { LeftHeader } from "./HeaderStyles";
import { HeaderContainer } from "./HeaderStyles";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <H2>VM</H2>
        </LogoContainer>
        <LeftHeader>
          <HeaderItem>
            shop <FaAngleDown />
          </HeaderItem>
          <HeaderItem>
            solutions <FaAngleDown />
          </HeaderItem>
          <HeaderItem>
            SME <FaAngleDown />
          </HeaderItem>
        </LeftHeader>
        <RightHeader>
          <HeaderItem>
            help <FaAngleDown />
          </HeaderItem>
          <HeaderItem>
            <CiSearch />
          </HeaderItem>
          <HeaderItem>
            <CiUser />
          </HeaderItem>
        </RightHeader>
        <Menu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IoMdMenu />
        </Menu>
        <PopUpMenu isOpen={isMenuOpen}>
          <PopupMenuItem style={{ justifyContent: "flex-end" }}>
            <IoIosClose onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </PopupMenuItem>
          <PopupMenuItem>Shop</PopupMenuItem>
          <PopupMenuItem>Solutions</PopupMenuItem>
          <PopupMenuItem>SME</PopupMenuItem>
          <PopupMenuItem>Help</PopupMenuItem>
          <PopupMenuItem>Login</PopupMenuItem>
        </PopUpMenu>
      </HeaderContainer>
    </>
  );
};
