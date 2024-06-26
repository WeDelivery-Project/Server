const { model, Schema } = require("mongoose");

const WilayaModel = new Schema({
  code: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  tarifs: {
    type: [
      {
        etat: String,
        price: Number,
      },
    ],
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

module.exports = model("Wilaya", WilayaModel, "wilayas");
