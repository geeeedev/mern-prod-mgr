//create the schema for model, export model

const mongoose = require("mongoose");
const errMsgRequired = "{PATH} is required.";
const errMsgMinLength = "{PATH} must be at least {MINLENGTH} characters.";

const PrdMgrSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, errMsgRequired],
      minlength: [3, errMsgMinLength],
    },
    price: {
      type: Number,
      required: [true, errMsgRequired],
      min: [0, "{PATH} must be at least {MIN} dollars."],
    },
    description: {
      type: String,
      required: [true, errMsgRequired],
      minlength: [10, errMsgMinLength],
    },
  },
  { timestamps: true }
);

//build model using schema
const PrdMgr = mongoose.model("PrdMgr", PrdMgrSchema);
module.exports = PrdMgr;
