import { Schema } from "mongoose";

let studentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name field is Required"],
    },
    roll: {
      type: Number,
      required: [true, "Roll field s required"],
    },

    address: {
      type: String,
      required: [true, "Address field s required"],
    },
  },
  {
    timeStamp: true,
  }
);
export default studentSchema;
