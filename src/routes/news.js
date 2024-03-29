const express = require('express');
const router = express.Router();

const newscontroller = require('../app/controllers/NewsController');

// newscontroller.index;
router.use('/:slug', newscontroller.show);
router.use('/', newscontroller.index);

module.exports = router;