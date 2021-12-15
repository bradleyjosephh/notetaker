var app = require('express').Router()
var db = require('../db/db.json')

app.get('/api/notes', function(req, res){
    db = JSON.parse(fs.readfilesync('./db/db.json')) || []
    console.log('get route', db)
    res.json(db)
})

app.post('/api/notes', function(req, res){
    var newNote = {
        id: Math.floor(Math.random()*100),
        tile: req.body.title,
        test: req.body.text
    }
    db.push(newNote)
    fs.writefilesync('./db/db.json', JSON.stringify(db), function(err){
        if (err) throw err
    })
    console.log('post route', db)
    res.json(db)
})

app.delete('/api/notes/:id', function(req, res){
    var updatedNotes =  db.filter((ele, i ) => {
        return(ele.id != req.params.id)
    })
    db = updatedNotes
    fs.writefilesync('./db/db.json', JSON.stringify(db), function(err){
        if (err) throw err
    })
    console.log('delete route', db)
    res.json(db)
})

module.exports = app