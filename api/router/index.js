const router = require('express').Router();
const UserRouter = require('./usuario');
const MesaRouter = require('./mesa');

router.use('/usuario', UserRouter);
router.use('/mesa', MesaRouter);

module.exports = router;
