const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simulação do cardápio, até ter banco ligado
const produtos = [
  { nome: 'Sushi de Salmão', preco: 15.90 },
  { nome: 'Temaki de Atum', preco: 18.50 },
  { nome: 'Hot Roll', preco: 12.00 }
];

app.get('/cardapio', (req, res) => {
  const html = produtos.map(p => `
    <div style="margin-bottom: 10px;">
      <strong>${p.nome}</strong><br/>
      R$ ${p.preco.toFixed(2)}
    </div>
  `).join('');

  res.send(`
    <html>
      <head>
        <title>Cardápio Digital</title>
        <meta charset="utf-8"/>
      </head>
      <body style="font-family: sans-serif; padding: 20px;">
        <h1>Cardápio do Guika</h1>
        ${html}
        <a href="https://wa.me/5599999999999?text=Quero%20fazer%20um%20pedido" target="_blank">
          <button style="padding: 10px 20px; background-color: green; color: white; border: none; cursor: pointer;">
            Fazer pedido no WhatsApp
          </button>
        </a>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porra da porta ${PORT}`);
});
