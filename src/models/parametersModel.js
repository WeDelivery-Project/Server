const {model, Schema} = require('mongoose');

const ParametersModel = new Schema({
 
  website: {
    type: String,
    required: true
  },

  entreprise: { 
    type: String, 
    required: true
  },

  address: {
    type: String,
    required: true
  },

  mail: {
    type: String,
    required: true
  },

  phonenumber: {
    type: String,
    required: true
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  
  updated_at: {
    type: Date,
    default: Date.now
  }

});

module.exports = model('Parameters', ParametersModel);