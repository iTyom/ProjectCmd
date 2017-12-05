const mongoose   = require('mongoose'),
timestamps = require('mongoose-timestamp')

var orderLineSchema = new mongoose.Schema({
  product : Number,
  order : Number,
  quantity : Number
})


orderLineSchema.plugin(timestamps)

module.exports = exports = mongoose.model('orderline', orderLineSchema)
