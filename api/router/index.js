const router = require('express').Router();
const UserRouter = require('./usuario');
const MesaRouter = require('./mesa');
const JogadorRouter = require('./jogador');

router.use('/usuario', UserRouter);
router.use('/mesa', MesaRouter);
router.use('/jogador', JogadorRouter);

module.exports = router;
