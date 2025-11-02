require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/github',(req,res)=>{
    res.send(`My Github Url : <a href=${process.env.GITHUB_URL} target='_blank' >Shashank-Bharti </a>`)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port : http://localhost:${process.env.PORT}`)
})
