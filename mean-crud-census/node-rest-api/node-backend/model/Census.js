const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    yearofcensus: { type: String },
    censustakername: { type: String },
    numberofpeople: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String },

}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);


