require('dotenv').config()
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'chargreen_db'
})

app.get('/', (req, res) => {
    db.query('select * from employee', (err, data) => {
        if(err){
            return res.json({message: err})
        }
        return res.json(data)
    })
})

app.listen(3000, () => {
    console.log('Listening on URL: http://140.84.161.236:3000/')
})