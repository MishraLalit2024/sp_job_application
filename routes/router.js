const express = require('express');
const { home, homeRenderer } = require('../controllers/redirectors');
const router = express.Router();


router.get('/', home);

router.get('/home', homeRenderer);

router.post('/validate', (req, res)=>{
    res.send("Form submitted successfully.");
})

router.get('*', home)


module.exports = router;