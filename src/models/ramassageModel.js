const { Schema, model } = require("mongoose");

const RamassageModel = new Schema({
  wilaya: {
    type: Schema.Types.ObjectId,
    ref: "Wilaya",
    required: true,
  },

  adresse: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },

  commune: {
    type: Schema.Types.ObjectId,
    ref: "Commune",
    required: true,
  },

  prix: {
    type: Number,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enums: ["Nouveau", "Valider", "Terminer"],
    default: "Nouveau",
  },

  isPayed: {
    type: Boolean,
    default: false,
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

module.exports = model("Ramassage", RamassageModel, "ramassages");
