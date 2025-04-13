const Produto = require('../models/Produto');

module.exports = {
  async listar(req, res) {
    const produtos = await Produto.findAll();
    res.json(produtos);
  },
  async criar(req, res) {
    const produto = await Produto.create(req.body);
    res.json(produto);
  },
  async atualizar(req, res) {
    await Produto.update(req.body, { where: { id: req.params.id } });
    res.json({ ok: true });
  },
  async deletar(req, res) {
    await Produto.destroy({ where: { id: req.params.id } });
    res.json({ ok: true });
  }
};
