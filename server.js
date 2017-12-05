console.log("Start Serveur");

const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

// Order
app.get('/order', function(req, res) {
  res.send('get order page')
})

app.put('/order', function(req, res) {
  res.send('put order page')
})

app.get('/order/{id}', function(req, res) {
  res.send('get order {id} page')
})

app.delete('/order/{id}', function(req, res) {
  res.send('del order {id} page')
})

app.post('/order/{id}', function(req, res) {
  res.send('post order {id} page')
})

//Product
app.get('/product', function(req, res) {
  res.send('get product page')
})

app.get('/product/{id}', function(req, res) {
  res.send('get product {id} page')
})

app.post('/product', function(req, res) {
  res.send('put product page')
})

app.delete('/product/{id}', function(req, res) {
  res.send('del product {id} page')
})

app.put('/product/{id}', function(req, res) {
  res.send('post product {id} page')
})

//ligne de commande crud
app.post('/order/{order id}/line', function(req, res) {
  res.send('put order {order id} line page ')
})

app.delete('/order/{order id}/line/{line id}', function(req, res) {
  res.send('del order {order id} line {line id} page ')
})

app.put('/order/{order id}/line/{line id}', function(req, res) {
  res.send('post order {order id} line {line id} page ')
})

//metier
app.post('/order/{id}/confirm', function(req, res) {
  res.send('post order {id} confirm page ')
})

app.get('/dashboard/orders', function(req, res) {
  res.send('get dashboard orders page')
})

//Afficher le produit le plus vendu
app.get('/dashboard/product', function(req, res) {
  res.send('get dashboard product page')
})

app.listen(3000, function() {
  console.log('listening on 3000...')
})
