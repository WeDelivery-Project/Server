const {model, Schema} = require('mongoose');

const TarifModel = new Schema({
   
  wilaya: {
    type: Schema.Types.ObjectId,
    ref: "Wilaya",
    required: true,

  },
  
  etat: {
    type: Schema.Types.ObjectId,
    ref: "Etat",
    required: true,
  },
  
  tarif: {
    type: Number,
    required: true,
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

module.exports = model('Tarif', TarifModel, "tarifs");