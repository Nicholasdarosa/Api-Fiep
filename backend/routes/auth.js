const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Registro de usuário
router.post("/register", async (req, res) => {
  const { email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);
  const user = new User({ email, senha: hashedPassword });
  await user.save();
  res.json({ message: "Usuário criado" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(senha, user.senha))) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;
