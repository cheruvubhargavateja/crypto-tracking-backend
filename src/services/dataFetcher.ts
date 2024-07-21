import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/simple/price";

export const fetchCryptoData = async (symbols: string[]) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        ids: symbols.join(","),
        vs_currencies: "usd",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto data", error);
    return null;
  }
};
