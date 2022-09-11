const express = require('express');
const {homeview, genertePdf} = require('../controllers/home.controller')


const router = express.Router();


router.get('/', homeview);
router.get('/download', genertePdf) 


module.exports = {
    routes: router
}