const router = require('express').Router();
const UserRouter = require('./usuario');

router.use('/usuario', UserRouter);

module.exports = router;
