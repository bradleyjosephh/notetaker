const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded( {extended: true}))
app.use(express.static('public'))

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use(apiRoutes)
app.use(htmlRoutes)
app.listen(PORT, function(){
    console.log('applistening')
})