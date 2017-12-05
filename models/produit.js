const mongoose   = require('mongoose'),
timestamps = require('mongoose-timestamp')

var produitSchema = new mongoose.Schema({
  nom : String,
  price : Number,
  Stock: Number
})

produitSchema.plugin(timestamps)

module.exports = exports = mongoose.model('product', produitSchema)
