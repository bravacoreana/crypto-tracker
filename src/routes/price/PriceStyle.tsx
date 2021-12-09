import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Block = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.span`
  width: 50%;
`;

export const Content = styled.span`
  margin-top: 10px;
  color: ${(props) =>
    props.children && props.children > 0 ? "#e74c3c" : "#3498db"};
  vertical-align: middle;
`;

export const H1 = styled.h1`
  margin-top: 15px;
`;
export const RateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-top: 15px;
`;

export const RateBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`;

export const RateTitle = styled.div`
  height: 50%;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;
