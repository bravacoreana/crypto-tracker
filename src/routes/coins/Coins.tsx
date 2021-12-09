import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../../api";
import { ICoin, IThemeProps } from "../../interfaces";
import {
  Container,
  Header,
  CoinsList,
  Coin,
  Title,
  Image,
  Loader,
} from "./CoinsStyle";
import Button from "../../components/Button";
import HelmetType from "../../components/Helmet";

export default function Coins({ toggleDark, isDark }: IThemeProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <HelmetType title="Coins"></HelmetType>
      <Header>
        <div></div>
        <Title>Coins</Title>
        <Button onClick={toggleDark}>{isDark ? "🌙" : "🌞"}</Button>
      </Header>
      {isLoading ? (
        <Loader>loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`${coin.id}`} state={{ name: coin.name }}>
                <Image
                  alt={coin.name}
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name}
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
