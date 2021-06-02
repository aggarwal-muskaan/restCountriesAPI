import styled from "styled-components";
import { white, darkBlue, darkGray } from "./color";

export const Headpiece = styled.div`
  background-color: ${(props) => (props.theme === "light" ? white : darkBlue)};
  height: 80px;
  padding: 0 clamp(1rem, 6vw, 4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 6px -8px ${darkGray};
`;

export const ColorMode = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
`;
