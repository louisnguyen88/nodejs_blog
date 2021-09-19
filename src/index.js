const express = require('express')
const path = require('path')
var morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

// HTTP loggers
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));

// route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})