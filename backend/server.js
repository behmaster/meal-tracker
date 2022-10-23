require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

//express settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

//controllers
app.use('/meals', require('./controllers/meals'))
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// Listen for connections
app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`)
})