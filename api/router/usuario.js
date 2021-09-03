const Usuario = require('../models/usuario');
const UserRouter = require('express').Router();

UserRouter.get('/login', (req, res) => {
  const info = req.query;
  Usuario.login(info)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

UserRouter.post("/singin", (req, res) => {
  const usuario = req.body;
  Usuario.singin(usuario)
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

module.exports = UserRouter;
