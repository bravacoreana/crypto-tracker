import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CoinsList = styled.ul``;

export const Coin = styled.li`
  background-color: ${(props) => props.theme.textPadding};
  color: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
export const Loader = styled.span``;
