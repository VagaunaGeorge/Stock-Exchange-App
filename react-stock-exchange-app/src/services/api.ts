import axios from "axios";
import { toast } from "react-toastify";

const apiKey = "8_cSmacRzrYAQAIMxA5Bz20tt5E5OhZ9";

export const getCompanies = async () => {
  try {
    const response = await axios.get(
      `https://api.polygon.io/v3/reference/tickers?active=true&apiKey=${apiKey}`
    );
    return response.data.results.filter(
      (company: any) => company.market === "stocks"
    );
  } catch (error) {
    toast.error("Error: Faild fetching companies");
  }
};

export const getStockData = async (ticker: string) => {
  try {
    const response = await axios.get(
      `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2020-12-01/2023-11-01?adjusted=true&sort=asc&limit=120&apiKey=${apiKey}`
    );
    return response.data.results.map((result: any) => ({
      date: result.t,
      close: result.c,
    }));
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 429
    ) {
      toast.error(
        `Error: Too many requests within a minute. Please try again later.`,
        {
          position: "bottom-right",
          autoClose: 3000,
        }
      );
    } else {
      toast.error(`Error: Failed fetching stock data for ${ticker}`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
    return [];
  }
};
