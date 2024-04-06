const { model, Schema } = require("mongoose");

const EtatModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    require: true,
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

module.exports = model("Etat", EtatModel, "etats");
