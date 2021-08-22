import React, { useEffect, useState } from "react";
import {
  Container,
  RightSide,
  MobileNavbar,
  DesktopNavbar
} from "./NavbarStyle";
import Brand from "../Brand/Brand";
import Search from "../DesktopMenu/Search/Search";
import Cart from "../Cart/Cart";
import Hamburger from "../MobileMenu/Hamburger/Hamburger";
import Desktop from "../DesktopMenu/DesktopMenu";

const NavBar: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container scroll={scroll}>
      <MobileNavbar>
        <Hamburger />
      </MobileNavbar>
      <Brand />
      <DesktopNavbar>
        <Desktop />
      </DesktopNavbar>
      <RightSide>
        <Search scroll={scroll} />
        <Cart scroll={scroll} />
      </RightSide>
    </Container>
  );
};

export default NavBar;
