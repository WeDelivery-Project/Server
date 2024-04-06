const {model, Schema} = require('mongoose');

const PaiementModel = new Schema({
 
  solde_client: {
    type:String ,
    required: true
  },

  date_livraison: { 
    type: Date, 
    required: true
  },

  sender: {
    type: String,
    required: true
  },

  receiver: {
    type: String,
    required: true
  },

  montant_livraison: {
    type: Date,
    required: true
  },

  montant_total: {
    type: String,
    required: true
  },

  status: {
    type: Boolean, 
    required: true
  },

  benefice_wd: { 
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

module.exports = model('Paiement', PaiementModel, "paiements");