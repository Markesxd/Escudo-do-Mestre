const MesaRouter = require('express').Router();
const Mesa = require('../models/mesa');

MesaRouter.post('/', (req, res) => {
  const mesa = req.body;
  Mesa.add(mesa)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

MesaRouter.get('/id/:id', (req, res) => {
  const {id} = req.params
  Mesa.getById(id)
  .then(resolve => res.json(resolve))
  .catch(reject => res.status(400).json(reject));
})

MesaRouter.get('/:mestre', (req, res) => {
  Mesa.get(req.params.mestre)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(418).json(reject));
});

MesaRouter.delete('/:id', (req, res) => {
  Mesa.delete(req.params.id)
  .then((resolve) => res.status(204).end())
  .catch((reject) => res.status(400).json(reject));
});

MesaRouter.patch('/:id', (req, res) => {
  const {id} = req.params;
  const fields = req.body;
  Mesa.patch(id, fields)
  .then(resolve => res.json(resolve))
  .catch(reject => res.status(400).json(reject));
});

module.exports = MesaRouter;
