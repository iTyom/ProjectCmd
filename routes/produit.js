const Produit = require('../Models/produit'),
  Line = require('../Models/orderline');


module.exports = function(server) {

  /**
   * Create
   */
  server.put('/product/{id}', (req, res, next) => {

    let data = req.body || {}

    Produit.create(data)
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
  server.get('/product', (req, res, next) => {

    let limit = parseInt(req.query.limit, 10) || 10, // default limit to 10 docs
      skip = parseInt(req.query.skip, 10) || 0, // default skip to 0 docs
      query = req.query || {}

    // remove skip and limit from query to avoid false querying
    delete query.skip
    delete query.limit

    Produit.find(query).skip(skip).limit(limit)
      .then(produit => {
        res.send(200, produit)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })

  /**
   * Read
   */
  server.get('/product/:productId', (req, res, next) => {

    Produit.findById(req.params.produitId)
      .then(produit => {
        res.send(200, produit)
        next()
      })
      .catch(err => {
        res.send(500, err)
      })

  })

  /**
   * Update
   */
  server.put('/users/:produitId', (req, res, next) => {

    let data = req.body || {},
      opts = {
        new: true
      }

    Produit.findByIdAndUpdate({
        _id: req.params.produitId
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
  server.del('/product/:productId', (req, res, next) => {

    const produitId = req.params.produitId

    Produit.findOneAndRemove({
        _id: produitId
      })
      .then(() => {

        // remove associated todos to avoid orphaned data
        Line.deleteMany({
            _id: produitId
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
