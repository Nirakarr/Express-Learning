import { Schema } from "mongoose";
let productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required."],
      trim: true,
    },
    quantity: {
      type: Number,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    featured: {
      type: Boolean,
    },
    productImage: {
      type: String,
      trim: true,
    },
    manufactureDate: {
      type: Date,
      default: new Date(),
      trim: true,
    },
    company: {
      type: String,
      default: "apple",
      enum: ["apple", "samsung", "dell", "mi"],
      trim: true,
    },
  },
  {
    timestamps: true, //it gives createat and updatedat
  }
);
export default productSchema;
