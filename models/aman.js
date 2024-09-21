const mongoose = require("mongoose");

const amanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Aman = mongoose.model("Aman", amanSchema);
module.exports = Aman;
