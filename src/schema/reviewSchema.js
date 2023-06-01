import { Schema } from "mongoose";

export let reviewSchema = Schema(
  {
    productRating: {
      type: Number,
      trim: true,
      required: [true, " productRating field is required"],
    },
    comment: {
      type: String,
      trim: true,
      required: [true, "comment field is required"],
    },
    productId: {
      // ref is use to connect different collection
      //in ref you have to understan two thing
      //1) how to link(connect) two different collection
      //2) and how to populate
      type: Schema.ObjectId,
      ref: "Product",
      trim: true,
      required: [true, "productId field is required"],
      //   type: Schema.ObjectId,
      //   ref: "Product",
      //while finding its details  to populate you can use  populate("productId") to populate productId info
      //   always use collection Name with singular  instead of ModleName
    },
    // playerId: {
    //   type: Schema.ObjectId,
    //   ref: "Player",
    //   trim: true,
    //   required: [true, "playerId field is required"],
    // },
  },

  {
    timestamps: true,
  }
);
export default reviewSchema;
