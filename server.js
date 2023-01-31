const express = require('express');
const fs = require('fs');
const { parse } = require('path');
const app = express();
let db = [];

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"))


app.get('/', (req, res) => {
    db = require("./phone.json")
    res.render("index", {phone: db})
})
app.get('/add', (req, res) => {
    res.render("add")
})


app.put('/add', (req, res) => {
    console.log(req.body);
    // let phone = Object.assign(req.body) // same thing like spread operator
    let phone = { ...req.body }
    db = require("./phone.json")
    phone.id=db.length
    // save do db
    db.push(phone)
    fs.writeFileSync("phone.json", JSON.stringify(db))
    res.send("ok")
})

app.get('/edit/:id', (req, res) => {
    db = require("./phone.json")
    let phone = db.find((el) => el.id === parseInt(req.params.id))
    res.render("edit", {phone})
})


app.post('/edit', (req, res) => {
    let id = parseInt(req.body.id)
    db = require("./phone.json")
    let foundIndex = null
    db.find((el, index) => {
        if (el.id===id) {
            foundIndex = index
            return
        }
    })
    db[foundIndex] = req.body
    fs.writeFileSync("phone.json", JSON.stringify(db))
    res.send('ok')
})


app.get('/editDelete', (req, res) => {
    db = require("./phone.json")
    res.render("editDelete", {phone:db})
})




app.delete('/editDelete/:id', (req, res) => {
    db = require("./phone.json")
    let id = parseInt(req.params.id)
    let newDb = db.filter((el) => el.id !== id)
    fs.writeFileSync("phone.json", JSON.stringify(newDb))
    res.status(205).send('ok')
})


app.listen(3000, () => { 
    console.log('server ....');
 })