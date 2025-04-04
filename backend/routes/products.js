const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Criar produto
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Listar todos os produtos
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Buscar um produto pelo ID
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Atualizar produto
router.put("/:id", async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProduct);
});

// Remover produto
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Produto removido" });
});

module.exports = router;
