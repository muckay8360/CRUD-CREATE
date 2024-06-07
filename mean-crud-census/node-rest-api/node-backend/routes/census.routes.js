const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let census = require('../model/census');
 
// Get all censuss
censusRoute.route('/').get((req, res) => {
    census.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get census: ${error}`);
  })
})
// Add a census
censusRoute.route('/add-census').post((req, res) => {
census.create(req.body).then(() => {
console.log('census added successfully.');
res.status(200);
})
.catch((error) => {
console.error(`Could not save census: ${error}`);
})
})
// Delete a census
censusRoute.route('/delete-census/:id').delete((req, res) => {
console.log(`Preparing to delete: ${req.params.id}`);
census.findByIdAndDelete(req.params.id).then(() => {
  console.log('census deleted successfully.');
  res.status(200);
  })
  .catch((error) => {
  console.error(`Could not delete census: ${error}`);
  })
})

censusRoute.route('/update-census/:id').put((req,res) => {
  census.findByIdAndUpdate(req.params.id, req.body, { new: true })
   .then((response) => {
    res.status(200).json({
      message: 'census Information Updated',
      data: response
    });
   })
   .catch((error) => {
    console.error(`census Update failed: ${error}`);
    res.status(500).json({error: 'census Update failed'});
   });
})
module.exports = censusRoute;