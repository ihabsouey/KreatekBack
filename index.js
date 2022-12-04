const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/routes')

const app = express()
const port = 3030

let cors = require("cors");
app.use(cors());

mongoose.Promise = global.Promise

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 2);
router(app)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true })
    mongoose.connection.once('open', () => {
        console.log('Connected to database')
    }
    )
})




