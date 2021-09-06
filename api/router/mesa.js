const MesaRouter = require('express').Router();
const Mesa = require('../models/mesa');

MesaRouter.post('/', (req, res) => {
  const mesa = req.body;
  console.log(mesa);
  Mesa.add(mesa)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

MesaRouter.get('/', (req, res) => {
  Mesa.get()
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(418).json(reject));
});

module.exports = MesaRouter;
