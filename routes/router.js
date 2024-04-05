const express = require('express');
const { home, homeRenderer } = require('../controllers/redirectors');
const router = express.Router();


router.get('/', home);

router.get('/home', homeRenderer);

router.get('*', home)


module.exports = router;