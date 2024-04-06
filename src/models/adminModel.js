const { model, Schema } = require("mongoose");

const AdminModel = new Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  phonenumber: {
    type: String,
    required: true,
  },

  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
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

module.exports = model("Admin", AdminModel, "admins");
