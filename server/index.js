const express = require("express")
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routerurls = require('./router')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.BASE_URL, () => console.log('db connected'))
app.use(express.json())
app.use(cors())
app.use('/', routerurls)
app.listen(4000)

