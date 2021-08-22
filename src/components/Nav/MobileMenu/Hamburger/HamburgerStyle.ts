import styled from "styled-components";
interface ContainerProps {
  toggle: boolean;
}
export const Container = styled.div`
  #ham1 {
    transition: 0.5s;
    ${(p: ContainerProps) =>
      p.toggle ? "transform: rotate(-45deg) translate(-6px, 7px);" : ""}
  }
  #ham2 {
    transition: 0.5s;
    ${(p: ContainerProps) => (p.toggle ? "opacity:0" : "opacity:1")}
  }
  #ham3 {
    transition: 0.5s;
    ${(p: ContainerProps) =>
      p.toggle ? "transform: rotate(45deg) translate(-7px, -8px);" : ""}
  }
`;
