const MesaRouter = require('express').Router();
const Mesa = require('../models/mesa');

MesaRouter.post('/', (req, res) => {
  const mesa = req.body;
  Mesa.add(mesa)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

MesaRouter.get('/:mestre', (req, res) => {
  Mesa.get(req.params.mestre)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(418).json(reject));
});

module.exports = MesaRouter;
