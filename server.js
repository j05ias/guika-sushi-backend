require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const db = require('./models/index');

app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtoRoutes);

app.get('/cardapio', async (req, res) => {
  const Produto = require('./models/Produto');
  const produtos = await Produto.findAll({ where: { ativo: true } });
  const html = produtos.map(p => \`
    <div>
      <strong>\${p.nome}</strong><br/>
      \${p.descricao}<br/>
      <b>R$ \${p.preco}</b><br/>
      <a href="https://wa.me/55SEUNUMERO?text=Quero pedir: \${encodeURIComponent(p.nome)}" target="_blank">Pedir no WhatsApp</a>
    </div>
    <hr/>\`).join('');
  res.send(\`<h1>Cardápio Guika Sushi</h1>\${html}\`);
});

db.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porra da porta', process.env.PORT);
  });
});
