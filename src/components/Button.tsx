import styled from "styled-components";
import { IButtonProps } from "../interfaces";

const ThemeBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin: 20px 0;
  float: right;
  background-color: ${(props) => props.theme.accentColor};
`;

const Theme = styled.span`
  width: 16px;
  height: 16px;
  text-align: center;
  display: block;
`;

export default function Button({ onClick, children }: IButtonProps) {
  return (
    <ThemeBox onClick={onClick}>
      <Theme>{children}</Theme>
    </ThemeBox>
  );
}
