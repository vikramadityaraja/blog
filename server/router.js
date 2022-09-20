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

router.post('/login', async (req,res) => {
    const {Email, Password} = req.body
    const user = register.findOne( {email : Email}, (err, user) => {
        
    })
    console.log(user)
    if(user == null) {
        return res.status(400).send(`can't find user`)
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password )){
            res.send('success')
        } else{
            res.send('not allowed')
        }
    } catch {
        res.send('not working')
    }
})

module.exports = router