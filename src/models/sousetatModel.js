const { model, Schema } = require("mongoose");

const SousEtatModel = new Schema({
  etat: {
    type: Schema.Types.ObjectId,
    ref: "Etat",
    required: true,
  },

  name: {
    type: String,
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

module.exports = model("Sousetat", SousEtatModel, "sousetats");
