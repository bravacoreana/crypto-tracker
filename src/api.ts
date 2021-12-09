const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(id: string) {
  return fetch(`${BASE_URL}/coins/${id}`).then((res) => res.json());
}

export function fetchCoinTickers(id: string) {
  return fetch(`${BASE_URL}/tickers/${id}`).then((res) => res.json());
}

export function fetchCoinHistory(id: string) {
  const endDate = Math.floor(Date.now() / 1000);
  //   const aWeekAgo = endDate - 60 * 60 * 24 * 7; // a week ago
  const twoWeeksAgo = endDate - 60 * 60 * 24 * 7 * 2; // a week ago

  return fetch(
    `${BASE_URL}/coins/${id}/ohlcv/historical?start=${twoWeeksAgo}&end=${endDate}`
  ).then((res) => res.json());
}

export function fetchCoinPrice(id: string) {
  return fetch(`${BASE_URL}/coins/${id}/exchanges`).then((res) => res.json());
}
