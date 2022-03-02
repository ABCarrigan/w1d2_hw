const express = require('express')
const app = express()

const fs = require('fs')
app.engine('hypatia', (filePath, options, callback) => { 
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'hypatia')

app.get('/', (req, res) => {
    res.render('template', { title: 'template1', content: 'Route 1: root' })
})
app.get('/r2', (req, res) => {
    res.render('template', { title: 'template1', content: 'Route 2' })
})
app.get('/r3', (req, res) => {
    res.render('template', { title: 'template1', content: 'Route 3' })
})
app.get('/r4', (req, res) => {
    res.render('template', { title: 'template1', content: 'Route 4' })
})
app.get('/r5', (req, res) => {
    res.render('template', { title: 'template1', content: 'Route 5' })
})
app.get('/r6', (req, res) => {
    res.render('template2', { title: 'template2', content: 'Route 6' })
})
app.get('/r7', (req, res) => {
    res.render('template2', { title: 'template2', content: 'Route 7' })
})
app.get('/r8', (req, res) => {
    res.render('template2', { title: 'template2', content: 'Route 8' })
})
app.get('/r9', (req, res) => {
    res.render('template2', { title: 'template2', content: 'Route 9' })
})
app.get('/r10', (req, res) => {
    res.render('template2', { title: 'template2', content: 'Route 10' })
})

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

  