
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(express.static(__dirname+ "/public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/servicios',(req,res)=>{
    res.send('Estas en la pagina servicios')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})