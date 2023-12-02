// StockChart.tsx
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { toast } from "react-toastify";
import axios from "axios";
const API_KEY = "vBvZSttsJY8TywPx5rUz";

interface StockChartProps {
  company: string;
}

const StockChart: React.FC<StockChartProps> = ({ company }) => {
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://data.nasdaq.com/api/v3/datasets/WIKI/${company}/data.json?api_key=${API_KEY}`,
          {
            params: { limit: 50 }, // Adjust the limit as needed
          }
        );
        const stockData = response.data.dataset.data;

        const chartData = {
          labels: stockData.map((dataPoint: any) => dataPoint[0]),
          datasets: [
            {
              label: "Stock Price",
              data: stockData.map((dataPoint: any) => dataPoint[4]), // Adjust the index based on your data structure
              fill: false,
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        toast.error("Failed to fetch stock data. Please try again later.");
      }
    };

    fetchStockData();
  }, [company]);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;
