import { useQuery } from "react-query";
import { fetchCoinTickers } from "../../api";
import {
  Container,
  Block,
  Title,
  Content,
  H1,
  RateContainer,
  RateBox,
  RateTitle,
} from "./PriceStyle";

interface PriceProps {
  id: string;
}

export default function Price({ id }: PriceProps) {
  const { isLoading, data } = useQuery(
    ["price", id],
    () => fetchCoinTickers(id),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <Container>
      {isLoading ? (
        "Loading rates..."
      ) : (
        <>
          <Block>
            <Title>Max change in 24h</Title>
            <Content>{data?.quotes.USD.market_cap_change_24h} %</Content>
          </Block>
          <H1>Change Rate (%)</H1>
          <RateContainer>
            <RateBox>
              <RateTitle>15m</RateTitle>
              <Content>{data?.quotes.USD.percent_change_15m}</Content>
            </RateBox>
            <RateBox>
              <RateTitle>30m</RateTitle>
              <Content>{data?.quotes.USD.percent_change_30m}</Content>
            </RateBox>
            <RateBox>
              <RateTitle>1h</RateTitle>
              <Content>{data?.quotes.USD.percent_change_1h}</Content>
            </RateBox>
            <RateBox>
              <RateTitle>6h</RateTitle>
              <Content>{data?.quotes.USD.percent_change_6h}</Content>
            </RateBox>
            <RateBox>
              <RateTitle>12h</RateTitle>
              <Content>{data?.quotes.USD.percent_change_12h}</Content>
            </RateBox>
            <RateBox>
              <RateTitle>24h</RateTitle>
              <Content>{data?.quotes.USD.percent_change_24h}</Content>
            </RateBox>
          </RateContainer>
        </>
      )}
    </Container>
  );
}
