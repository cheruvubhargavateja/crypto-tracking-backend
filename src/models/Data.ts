import { Schema, model } from "mongoose";

const dataSchema = new Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now },
});

export const Data = model("Data", dataSchema);
