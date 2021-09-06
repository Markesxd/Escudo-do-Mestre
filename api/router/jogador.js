const JogadorRouter = require('express').Router();
const Jogador = require('../models/jogador');

JogadorRouter.post('/', (req, res) => {
  const jogador = req.body;
  Jogador.add(jogador)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

module.exports = JogadorRouter;
