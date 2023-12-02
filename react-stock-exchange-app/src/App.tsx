// App.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StockExchangeApp from "./Components/StockExchangeApp";

const App: React.FC = () => {
  return (
    <div>
      <StockExchangeApp />
      <ToastContainer />
    </div>
  );
};

export default App;
