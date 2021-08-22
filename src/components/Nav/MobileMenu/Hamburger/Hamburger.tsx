import React, { useCallback } from "react";
import { Container } from "./HamburgerStyle";
import { toggleSidebar } from "../../../../store/sidebarToggle/actions";
import { useDispatch, useSelector } from "react-redux";
interface Toggle {
  sidebarToggle: {
    sideToggle: boolean;
  };
}

const Hamburger: React.FC = () => {
  const dispatch = useDispatch();
  const handleHamburger = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);
  const toggle = useSelector((state: Toggle) => state.sidebarToggle.sideToggle);
  return (
    <Container
      toggle={toggle}
      style={{ border: "none" }}
      onClick={handleHamburger}>
      <div id="ham1" />
      <div id="ham2" />
      <div id="ham3" />
    </Container>
  );
};

export default Hamburger;
