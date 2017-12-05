const Line = require('../models/orderline')


module.exports = function(server) {

  /**
   * Create
   */
  server.post('/order/:productId/line', (req, res, next) => {

    let data = Object.assign({}, {
      productId: req.params.productId
    }, req.body) || {}

    Line.create(data)
      .then(task => {
        res.send(200, task)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })


  /**
   * Update
   */
  server.put('/order/:productId/line/:orderlineId', (req, res, next) => {

    let data = req.body || {},
      opts = {
        new: true
      }

    Line.update({
        productId: req.params.productId,
        _orderlineId: req.params.orderlineId
      }, data, opts)
      .then(produit => {
        res.send(200, produit)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })

  /**
   * Delete
   */
  server.del('/order/:productId/line/:orderlineId', (req, res, next) => {

    Line.findOneAndRemove({
        productId: req.params.productId,
        _orderlineId: req.params.orderlineId
      })
      .then(() => {
        res.send(204)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })

  Line.deny({
      insert: function (orderlineId, req) {
    return req.order == 'confirmed';
    },
      delete: function (orderlineId, req) {
    return req.order == 'confirmed';
    },
      update: function (orderlineId, req) {
    return req.order == 'confirmed';
    }
  }
)