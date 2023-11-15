import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
// const PORT = 5000;
const port = process.env.PORT;
const app = express();
app.get("/", (req, res) => {
  res.send("API is Running...");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const paramsProduct = products.find((product) => product._id === req.params.id);
  res.json(paramsProduct)
});
app.listen(port, () => console.log(`server running on port ${port}`));
