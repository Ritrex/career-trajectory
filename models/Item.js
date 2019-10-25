const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const ItemSchema=new Schema({
  associated_categories:{
    type:[String],
    default:[]
  },
  event_date:{
    type:Date,
    required:true
  },
  src_url_public: {
    type: String,
    required: true
  },
  src_url_private: {
    type: String,
    required: true
  }
});

module.exports = model("Item", ItemSchema);
