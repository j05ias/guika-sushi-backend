const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/productRoutes');
app.use('/api/produtos', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor do Guika rodando na porra da porta ${PORT}`);
});
