const {model, Schema} = require('mongoose')

const LivreurModel = new Schema({
  
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

  phonenumber: {
    type: String,
    required: true
  },

  gender: {
    type: String, 
    required: true
  },

  licencenumber: { 
    type: String,
    required: true
  },

  bloodtype: { 
    type: String,
    required: true  
  },

  isactivated: {
    type: Boolean, 
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

module.exports = model('Livreur', LivreurModel, "livreurs");