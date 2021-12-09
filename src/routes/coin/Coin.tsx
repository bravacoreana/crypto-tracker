import { useQuery } from "react-query";
import {
  Route,
  Routes,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router";
import { Link } from "react-router-dom";
import { fetchCoinInfo, fetchCoinTickers } from "../../api";
import Button from "../../components/Button";
import {
  InfoData,
  IThemeProps,
  PriceData,
  RouteParams,
} from "../../interfaces";
import Chart from "../chart/Chart";
import {
  Container,
  Header,
  Title,
  Loader,
  Overview,
  OverviewItem,
  Description,
  Tabs,
  Tab,
} from "./CoinStyle";
import Price from "../price/Price";
import HelmetType from "../../components/Helmet";

export default function Coin({ isDark, toggleDark }: IThemeProps) {
  const { state } = useLocation();
  const { id } = useParams() as RouteParams;
  const navigate = useNavigate();

  const priceMatch = useMatch("/:id/price");
  const chartMatch = useMatch("/:id/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", id],
    () => fetchCoinInfo(id)
  );

  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", id],
    () => fetchCoinTickers(id),
    {
      refetchInterval: 5000,
    }
  );

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <HelmetType
        title={
          state?.name ? state.name : loading ? "Loading..." : infoData?.name
        }
      ></HelmetType>

      <Header>
        <Button onClick={() => navigate("../")}>⇦</Button>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
        <Button onClick={toggleDark}>{isDark ? "🌙" : "🌞"}</Button>
      </Header>

      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>$ {tickersData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${id}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${id}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Routes>
            <Route path="price" element={<Price id={id} />} />
            <Route path="chart" element={<Chart id={id} isDark={isDark} />} />
          </Routes>
        </>
      )}
    </Container>
  );
}
