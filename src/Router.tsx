import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/coin/Coin";
import Coins from "./routes/coins/Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

export default function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/:id/*`}
          element={<Coin isDark={isDark} toggleDark={toggleDark} />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<Coins toggleDark={toggleDark} isDark={isDark} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
