// StockChart.tsx
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { getStockData } from "../../services/api";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

interface StockChartProps {
  symbol: string;
}

const StockChart: React.FC<StockChartProps> = ({ symbol }) => {
  const [stockData, setStockData] = useState<any[]>([]);

  useEffect(() => {
    const fetchStockData = async () => {
      const response = await getStockData(symbol);
      setStockData(response);
    };

    fetchStockData();
  }, [symbol]);

  return (
    <Card style={{ marginTop: "50px" }}>
      <CardContent>
        {stockData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={stockData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="close"
                stroke="rgb(75, 192, 192)"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <Typography variant="h6" align="center">
            Loading chart...
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default StockChart;
