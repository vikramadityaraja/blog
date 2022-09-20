const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")
const templatecopy = require('./models')

router.post('/register', async (req,res) => {
//    const saltRounds = 10
//    const salt = await bcrypt.genSalt(saltRounds)
//    const epassword = await bcrypt.hash(req.body.Password,salt)
    const newuserdata = new templatecopy({
        Username : req.body.Username,
        Email : req.body.Email,
        Password : req.body.Password
    })
    newuserdata.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
}),

router.get('/register',(req,res) => {
    res.send('get request success yahoo!')
})

module.exports = router