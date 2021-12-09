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
export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
export const Loader = styled.span``;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  border-radius: 10px;
`;
export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
export const Description = styled.p`
  margin: 20px 0px;
`;
export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

export const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 7px 0px;
  border-radius: 10px;
  a {
    display: block;
    color: ${(props) =>
      props.isActive
        ? props.theme.accentColor
        : props.theme.textColor} !important;
  }
`;
