const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
const Tutorials =require('./tutorial.model');


// here we are doing the database configuration of mongodb
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = Tutorials(mongoose);

module.exports = db;