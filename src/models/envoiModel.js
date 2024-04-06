const { model, Schema } = require("mongoose");

const EnvoiModel = new Schema({
  name: {
    type: String,
    required: true,
  },

  infos: {
    type: String,
    required: true,
  },

  produit: {
    type: String,
    required: true,
  },

  wilaya: {
    type: Schema.Types.ObjectId,
    ref: "Wilaya",
    required: true,
  },

  commune: {
    type: Schema.Types.ObjectId,
    ref: "Commune",
    required: true,
  },

  etats: {
    type: [
      {
        etat: {
          type: Schema.Types.ObjectId,
          ref: "Etat",
        },
        date: {
          type: Date,
        },
        sousetat: {
          type: Schema.Types.ObjectId,
          ref: "Sousetat",
        },
        information: {
          type: String,
        },
      },
    ],
    default: [
      { etat: "640e1318df5a1d9802a46876", date: Date.new },
      { etat: "640e1318df5a1d9802a46877" },
      { etat: "640e1318df5a1d9802a46878" },
      { etat: "640e1318df5a1d9802a46879" },
      { etat: "640e1318df5a1d9802a4687a" },
      { etat: "640e1318df5a1d9802a4687b" },
      { etat: "640e1318df5a1d9802a4687c" },
      { etat: "640e1318df5a1d9802a4687d" },
      { etat: "640e1318df5a1d9802a4687e" },
      { etat: "640e1318df5a1d9802a4687f" },
    ],
  },

  numcommand: {
    type: String,
    required: true,
  },

  telephone1: {
    type: String,
    required: true,
  },

  telephone2: {
    type: String,
  },

  livreur: {
    type: Schema.Types.ObjectId,
    ref: "Livreur",
  },

  quantite: {
    type: Number,
    required: true,
  },

  prixtotal: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Envoi", EnvoiModel, "envois");
