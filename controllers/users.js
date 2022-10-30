const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')
const user = require('../models/user')

router.get('/home', (req,res) => {
    res.render('home.ejs')
})

router.get('/coffee', (req,res) => {
    res.render('coffee.ejs')
})



// router.get('/cart', async (req, res)=>{

//     // await db.postmessage.findOrCreate({ where: { name: req.body.name})
    
//         const posts = await db.post.findAll({
//             include: [db.order]
//         })
    
//         res.render('cart.ejs', {users})
//     })

router.get('/cart', async (req, res)=>{
    
    let user = await db.user.findByPk(res.locals.user.id, {
        include: [{
            model: db.order,
            include: [db.product]
        }]
    })

    res.json(user)
    // res.redirect('/cart')
    // res.render('cart.ejs')
})

router.post('/cart/:productId', async (req,res) => {

    let user = res.locals.user
    let product = await db.product.findOne({
        id: req.params.productId
    })
    // create new order
    let newOrder = await db.order.create({
        // userId: user.id,
        orderComplete: 'false'
    })
    let newProductOrder = await db.ProductOrder.findOrCreate({
        where: {
            orderId: newOrder.id,
            productId: req.params.productId
        }
    })

    await user.addOrder(newOrder)
    // await user.addProduct(product)

    res.redirect('/users/cart')
    // add product to an order
    // add order to the user

})



router.get('/sweets', (req,res) => {
    res.render('sweets.ejs')
})

router.get('/shop', async (req,res) => {

    try {
        let allProducts = await db.product.findAll() 
        res.render('shop.ejs', {allProducts})
        
    } catch(err) {
        res.json(err)
    }
})
router.get('/profile', (req, res)=>{
    res.render('users/profile.ejs')
})

router.get('/about', (req,res) => {
    res.render('about.ejs')
})

router.get('/contact', (req,res) => {
    res.render('contact.ejs')
})

router.get('/cart', (req, res)=>{
    res.render('users/cart.ejs')
})

router.get('/new', (req, res)=>{
    res.render('users/new.ejs')
})

router.post('/', async (req, res)=>{
    const [newUser, created] = await db.user.findOrCreate({where:{email: req.body.email}})
    if(!created){
        console.log('user already exists')
        res.render('users/login.ejs', {error: 'Looks like you already have an account! Try logging in :)'})
    } else {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        newUser.password = hashedPassword
        await newUser.save()
        const encryptedUserId = cryptojs.AES.encrypt(newUser.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('userId', encryptedUserIdString)
        res.redirect('/')
    }
})

router.get('/login', (req, res)=>{
    res.render('users/login.ejs')
})

router.post('/login', async (req, res)=>{
    const user = await db.user.findOne({where: {email: req.body.email}})
    if(!user){
        console.log('user not found')
        res.render('users/login', { error: "Invalid email/password" })
    } else if(!bcrypt.compareSync(req.body.password, user.password)) {
        console.log('password incorrect')
        res.render('users/login', { error: "Invalid email/password" })
    } else {
        console.log('logging in the user!!!')
        const encryptedUserId = cryptojs.AES.encrypt(user.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('userId', encryptedUserIdString)
        res.redirect('/')
    }
})

router.get('/logout', (req, res)=>{
    console.log('logging out')
    res.clearCookie('userId')
    res.redirect('/')
})

router.get('/')

module.exports = router