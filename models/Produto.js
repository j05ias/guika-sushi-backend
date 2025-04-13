const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Produto = sequelize.define('Produto', {
  nome: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  preco: DataTypes.DECIMAL,
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  imagem: DataTypes.TEXT
});

module.exports = Produto;
