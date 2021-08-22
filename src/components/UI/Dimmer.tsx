import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
interface Store {
  sidebarToggle: {
    sideToggle: boolean;
  };
}
interface DimProps {
  toggle: boolean;
}
interface Props {
  children: React.ReactNode;
}
export const DimContainer = styled.div`
  filter: ${(p: DimProps) => (p.toggle ? "blur(2px)" : "")};
  height: 100vh;
`;
const Dimmer: React.FC<Props> = ({ children }) => {
  const toggle = useSelector((state: Store) => state.sidebarToggle.sideToggle);

  const render = React.Children.map(children, (child, index) => child);

  return <DimContainer toggle={toggle}>{render}</DimContainer>;
};

export default Dimmer;
