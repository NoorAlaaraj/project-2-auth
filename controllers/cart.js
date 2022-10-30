const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')

router.get('/cart', async (req,res) => {

    let allProducts = await db.product.findAll() 
    res.render('cart.ejs', {allProducts})
})

router.delete('/:orderId', async (req,res) => {
    await db.product.destroy({
        where: { id: req.params.orderId }
    })
    res.redirect('/cart')
})

router.get('/:orderId', async (req,res) => {

// let pokemon = await db.product.findOne({
//     where: { id : req.params.orderId}
// })

res.render('/cart.ejs', {product})
})

module.exports = router