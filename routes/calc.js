'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('calc', {
        title: 'Калькулятор',
        isCalc: true
    });
});

module.exports = router;