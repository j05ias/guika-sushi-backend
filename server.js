const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const cardapioRoutes = require('./routes/cardapioRoutes');
app.use('/cardapio', cardapioRoutes);

// Rota padrão só pra provar que tá vivo
app.get('/', (req, res) => {
  res.send('Servidor rodando na porra da porta ' + PORT);
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porra da porta ${PORT}`);
});