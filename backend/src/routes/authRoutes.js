const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();
const SECRET = process.env.JWT_SECRET || 'segredo123';

// Registro
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (err) {
    console.error('Erro ao criar usuário:', err); 
    res.status(400).json({ error: 'Erro ao criar usuário.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const isMatch = await bcrypt.compare(senha, user.senha);
  if (!isMatch) return res.status(401).json({ error: 'Senha incorreta' });

  const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;
