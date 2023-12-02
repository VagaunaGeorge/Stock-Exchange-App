import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, LinearProgress } from "@mui/material";
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
    <Card style={{ margin: "50px" }} elevation={2}>
      <CardContent>
        {stockData && stockData.length > 0 ? (
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
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default StockChart;
