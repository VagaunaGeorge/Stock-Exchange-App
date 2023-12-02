// StockExchangeApp.tsx
import React, { useState } from "react";
import Header from "../Layout/Header";
import StockChart from "./StockChart/StockChart";

const StockExchangeApp: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  return (
    <>
      <Header onSelectCompany={(company) => setSelectedCompany(company)} />
      {selectedCompany && <StockChart company={selectedCompany} />}
    </>
  );
};

export default StockExchangeApp;
