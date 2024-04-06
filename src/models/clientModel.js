const { model, Schema } = require('mongoose');

const ClientModel = new Schema({

  firstname: {
    type: String,
    required: true
  },
  
  lastname: { 
    type: String, 
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  birthdate: {
    type: Date,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  gender: {
    type: String, 
    required: true
  },

  status: { 
    type: Boolean,
    required: true
  },

  entreprise: { 
    type: String,
    required: true  
  },

  cardnumber: {
    type: String,
    required: true
  },

  servicestock: {
    type: Boolean,
  },

  serviceemballage: { 
    type: Boolean,
  },

  servicecallcenter: {
    type: Boolean, 
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

module.exports = model('Client', ClientModel, "clients");