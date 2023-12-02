// StockChartComponent.tsx
import React, { useState } from "react";
import { Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Layout/Header";
import StockChart from "./StockChart/StockChart";

const StockExchangeComponent: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  const handleCompanySelect = (symbol: string) => {
    setSelectedSymbol(symbol);
  };

  return (
    <>
      <Header onCompanySelect={handleCompanySelect} />
      {selectedSymbol ? (
        <StockChart symbol={selectedSymbol} />
      ) : (
        <Typography variant="h5" align="center" style={{ marginTop: "100px" }}>
          Select a company to view the stock chart.
        </Typography>
      )}
    </>
  );
};

export default StockExchangeComponent;
