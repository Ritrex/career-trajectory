const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bidSchema = new Schema({


  buyerid: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },

  saleid: {
    type: Schema.Types.ObjectId,
    required: true
  },

  named_price: {
    type: Number,
    required: true
  }
},{timestamps:true});

module.exports = model("Bid", bidSchema);
