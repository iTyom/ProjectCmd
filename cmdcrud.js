const stitch = require("mongodb-stitch")
const client = new stitch.StitchClient('dbprojetcmd-pleka');
const db = client.service('mongodb', 'servprojetcmd').db('dbprojetcmd');

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds131546.mlab.com:31546/projetcmd', (err, database) => {
  // ... start the server
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

let itemsCollection = db.collection('order');


client.login().then( docs =>
    // CRUD operations:
let userId = client.authedId();
  itemsCollection.insertMany([ { owner_id: userId, x: 'item1' }, { owner_id: userId, x: 'item2' }, { owner_id: userId, x: 'item3' } ])
    .then(result => console.log('success: ', result))
    .catch(e => console.log('error: ', e));

).catch(e => console.log('error: ', e));
