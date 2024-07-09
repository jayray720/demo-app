const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Home!')
})

app.get('/about', (req, res) => {
    res.send('About!')
})

app.get('/contact', (req, res) => {
    res.send('contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
