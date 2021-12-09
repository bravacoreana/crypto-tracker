import { useQuery } from "react-query";
import { fetchCoinHistory } from "../../api";
import ApexChart from "react-apexcharts";
import { ChartProps, IHistorical } from "../../interfaces";

export default function Chart({ id, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", id],
    () => fetchCoinHistory(id),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => {
                return [
                  new Date(price.time_close).getTime(),
                  [
                    price.open.toFixed(2),
                    price.high.toFixed(2),
                    price.low.toFixed(2),
                    price.close.toFixed(2),
                  ],
                ];
              }),
            },
          ]}
          options={{
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#3C90EB",
                  downward: "#DF7D46",
                },
              },
            },
            chart: {
              type: "candlestick",

              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            annotations: {
              xaxis: [
                {
                  label: {
                    style: {
                      color: "red",
                    },
                  },
                },
              ],
            },

            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
          }}
        />
      )}
    </div>
  );
}
