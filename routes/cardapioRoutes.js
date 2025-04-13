const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    sucesso: true,
    cardapio: [
      { nome: 'Sushi Delícia', preco: '19.90' },
      { nome: 'Temaki Turbinado', preco: '29.90' },
      { nome: 'Combo Guika', preco: '49.90' }
    ]
  });
});

module.exports = router;
