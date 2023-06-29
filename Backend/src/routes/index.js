const getMonth = require('./handlers/getMonth');

const { Router } = require("express");

const router = Router();

router.get('/month', getMonth)


module.exports = router
