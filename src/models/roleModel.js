const {model, Schema} = require('mongoose');

const RoleModel = new Schema({
  
  name: {
    type: String,
    required: true 
  },

   envois: {
    type: Boolean,

   },

   clients: {
    type: Boolean,
  
   },

   livreurs: {
    type: Boolean,

   },

   paiements: {
    type: Boolean,
  
   },

   tarifs: {
    type: Boolean,
 
   },

   parameters: {
    type: Boolean,

   },

   administrateurs: {
    type: Boolean,
  
   },

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date,
    default: Date.now
  }

});

module.exports = model('Role', RoleModel, "roles");