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

app.listen(8081, () => {
    console.log('Listening on URL: http://localhost:8081/')
})