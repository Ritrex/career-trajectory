const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const salesSchema = new Schema(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    item: {
      associated_categories: {
        type: [String],
        default: []
      },
      event_date: {
        type: Date,
        required: true
      },
      src_url_public: {
        type: String,
        required: true
      },
      src_url_private: {
        type: String,
        required: true
      }
    },
    bids: {
      type: [{ type: Schema.Types.ObjectId }],
      ref: "Bid",
      default: []
    },
    //end date must be at least 7 days apart from the
    end_date: {
      type: Date,
      default: Date.now(),
      required: true
    },
    min_price: {
      type: Number,
      default: 0,
      required: true
    },
    max_price: {
      type: Number,
      default: 0,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    prefered_locations: {
      type: [
        {
          lugar: { type: String },
          horario: { type: String }
        }
      ]
    },
    reserved: {
      type: Boolean,
      default: false
    }

  });

module.exports = model("Sale", salesSchema);
