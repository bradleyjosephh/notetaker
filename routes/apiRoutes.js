var app = require('express').Router()
var db = require('../db/db.json')
var fs = require("fs")
// get note function
app.get('/api/notes', function(req, res){
    db = JSON.parse(fs.readFileSync('./db/db.json')) || []
    console.log('get route', db)
    res.json(db)
})
// post note function
app.post('/api/notes', function(req, res){
    var newNote = {
        id: Math.floor(Math.random()*100),
        title: req.body.title,
        text: req.body.text
    }
    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db), function(err){
        if (err) throw err
    })
    console.log('post route', db)
    res.json(db)
})
// delete function
app.delete('/api/notes/:id', function(req, res){
    var updatedNotes =  db.filter((ele, i ) => {
        return(ele.id != req.params.id)
    })
    db = updatedNotes
    fs.writeFileSync('./db/db.json', JSON.stringify(db), function(err){
        if (err) throw err
    })
    console.log('delete route', db)
    res.json(db)
})

module.exports = app