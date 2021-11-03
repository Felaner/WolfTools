'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');
const mailer = require('../mailer/mail');

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Главная',
        isHome: true
    });
});

router.post('/', async (req,res) => {
    console.log(req.body)
    try {
        if (!req.body) return res.sendStatus(400);
        const {name, email, phone, areaMessage} = req.body;
        const message = {
            to: "kirill.deykun1@gmail.com",
            html: `<ul>` +
                `<li>Имя: ${name}</li>` +
                `<li>Email: ${email}</li>` +
                `<li>Телефон: ${phone}</li>` +
                `<li>Сообщение: ${areaMessage}</li>` +
                `</ul>`
        }
        mailer(message)
        return res.sendStatus(200);
    } catch(e) {
        console.log(e);
    }
})

module.exports = router;