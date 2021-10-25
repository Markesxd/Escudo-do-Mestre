const JogadorRouter = require('express').Router();
const Jogador = require('../models/jogador');

JogadorRouter.post('/', (req, res) => {
  const jogador = req.body;
  Jogador.add(jogador)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

JogadorRouter.get('/:id', (req, res) => {
  Jogador.get(req.params)
  .then(resolve => res.json(resolve))
  .catch(reject => res.status(400).json(reject));
});

JogadorRouter.get('/:mestre', (req, res) => {
  const {mestre} = req.params;
  Jogador.get(mestre)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

JogadorRouter.get('/mesa/:mesa', (req, res) => {
  const {mesa} = req.params;
  Jogador.mesa(mesa)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

JogadorRouter.patch('/:id', (req, res) => {
  Jogador.patch(req.params.id, req.body)
  .then(resolve => res.json(resolve))
  .catch(reject => res.status(400).json(reject));
});

JogadorRouter.delete('/:id', (req, res) => {
  Jogador.delete(req.params.id)
  .then(resolve => res.json(resolve))
  .catch(reject => res.status(400).json(reject));
});


module.exports = JogadorRouter;
