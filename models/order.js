const mongoose   = require('mongoose'),
timestamps = require('mongoose-timestamp')


var orderSchema = new mongoose.Schema({
  code : { type : String, unique: true }, 
  date : { type : Date, default : Date.now },
  total : Number,
  Status: String
})

orderSchema.plugin(timestamps)

module.exports = exports = mongoose.model('product', orderSchema)
