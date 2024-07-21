import express from "express";
import { connectDB } from "./config";
import dataRouter from "./routes/data";
import { fetchCryptoData } from "./services/dataFetcher";
import { Data } from "./models/Data";
import cors from "cors"

const app = express();
const PORT = 4000;

app.use(cors());

connectDB();

app.use("/api/data", dataRouter);

const symbols = ["bitcoin", "ethereum", "litecoin"];

const fetchAndStoreData = async () => {
  const data = await fetchCryptoData(symbols);
  console.log(data);
  if (data) {
    for (const symbol of symbols) {
      const priceData = new Data({ symbol, price: data[symbol].usd });
      await priceData.save();
    }
  }
};

setInterval(fetchAndStoreData, (1000 * 60));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
