const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  quantidade: Number,
  categoria: String,
});

module.exports = mongoose.model("Product", ProductSchema);
