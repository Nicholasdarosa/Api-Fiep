require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");


app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);


const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
