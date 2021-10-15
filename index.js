const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const app = express()
const PORT = 3000

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('Connected to Mongo') })
    .catch((err) => {
        console.log(err)
    })


app.use(express.json())

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    res.send('🔥')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${PORT}`)
})
