const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 5000
const mysql = require('mysql')

app.use(cors())
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

const con = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: '',
    database: "entreprise"
})

con.connect((err) => {
    if(err){
        console.error('ERROR: ',err)
        return;
    }
    console.log("DATABASE CONNECTED")
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM client";
    con.query(sql, (err, result, fields) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

app.get('/:id',(req,res) => {
    const id = req.params.id;
    const sql = "SELECT * from client where id = ?"
    con.query(sql,[id],(err, result) => {
        if(err) {
            console.error("Error executing query : ",err)
            res.status(500).send("internal server error")
        }
        return res.status(201).json(result)
    })
})

app.post('/adduser', (req, res) => {
    const { id, firstname, familyname, email } = req.body;
    if (!id || !firstname || !familyname || !email) {
        return res.status(400).send("ID, Firstname, Familyname, and Email are required");
    }

    const sql = "INSERT INTO `client`(`id`, `fname`, `famname`, `email`) VALUES (?,?,?,?)";
    con.query(sql, [id, firstname, familyname, email], (err, result) => {
        if (err) {
            console.error("ERROR: ", err);
            return res.status(500).send("Internal Server Error");
        }
        res.status(201).send("Data added successfully");
    });
});

app.put('/updateuser', (req, res) => {
    const { id, firstname, familyname, email } = req.body;
    if (!id || !firstname || !familyname || !email) {
        return res.status(400).send("ID, Firstname, Familyname, and Email are required");
    }

    const sql = "UPDATE `client` SET `fname`=?,`famname`=?,`email`=? WHERE `id`=?"
    con.query(sql,[firstname,familyname,email,id],(err,result) => {
        if(err){
            console.error("ERROR EXECUTING THE QUERY : ", err)
            return res.status(500).send("Internl Server error")
        }
        return res.status(201).send("Data updated ")
    })
})

app.delete('/deleteuser/:id',(req,res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `client` WHERE id = ?"
    con.query(sql,[id],(err,result) => {
        if(err){
            console.error("error in request : ",err);
            return res.status(500).send("internal server error")
        }
        return res.status(201).send("user deleted successfully")
    })
})

app.listen(PORT,() => {
    console.log(`the server is running on ${PORT}`)
})