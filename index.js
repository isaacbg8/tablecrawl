const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', express.static('public'))

//app.get('/', function (req, res) {
// res.sendFile(__dirname+'/index.html');
//});

//router.get('/.well-known/acme-challenge/n3QlH7uck3cyfzGSUr1hovvoZWZ14qgQss4otx5Mq1k', (req, res)=>{
// res.send('n3QlH7uck3cyfzGSUr1hovvoZWZ14qgQss4otx5Mq1k.wEoPBKae2Lz28GBDhP5HTrX4UYota2U5cSqgZv3XMQ8');
//})

app.listen(port, () => console.log(`Tablecrawl index.js listening on port ${port}!`))