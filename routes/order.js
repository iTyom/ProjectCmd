const Order = require('../models/order')


module.exports = function(server) {

    server.put('/order/{orderId}', (req, res, next) => {

    let data = req.body || {}

    Order.create(data)
      .then(task => {
        res.send(200, task)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })

  /**
   * List
   */
  server.get('/order', (req, res, next) => {

    let limit = parseInt(req.query.limit, 10) || 10, // default limit to 10 docs
      skip = parseInt(req.query.skip, 10) || 0, // default skip to 0 docs
      query = req.query || {}

    // remove skip and limit from query to avoid false querying
    delete query.skip
    delete query.limit

    Order.find(query).skip(skip).limit(limit)
      .then(order => {
        res.send(200, order)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })

  /**
   * Read
   */
  server.get('/order/{orderId}', (req, res, next) => {

    Order.findById(req.params.orderId)
      .then(order => {
        res.send(200, order)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })

  /**
   * Update
   */
  server.post('/order', (req, res, next) => {

    let data = req.body || {},
      opts = {
        new: true
      }

    Order.findByIdAndUpdate({
        _id: req.params.orderId
      }, data, opts)
      .then(produit => {
        res.send(200, order)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })

  /**
   * Delete
   */
  server.del('/order/{orderId}', (req, res, next) => {

    const orderId = req.params.orderId

    Order.findOneAndRemove({
        _id: orderId
      })
      .then(() => {


        Order.deleteMany({
            _id: orderId
          })
          .then(() => {
            res.send(204)
            next()
          })
          .catch(err => {
            res.send(500, err)
          })
      }).catch(err => {
        res.send(500, err)
      })

  })

}
