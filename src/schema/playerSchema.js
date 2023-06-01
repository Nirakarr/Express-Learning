import { Schema } from "mongoose";

// let player = {
//   name: "nitan",
//   age: 425,
//   noOfMatches: 3,
//   isMarried: true,
//   spouse: "puja",
//   gender: "male",
//   parentInfo: { fatherName: "aaaa", motherName: "bbb" },
//   playerGame: [
//     { matchName: "A", noOfGoal: 3 },
//     { matchName: "A", noOfGoal: 3 },
//   ],
//   favFood: ["chicken", "mutton", "fish"],
//   abc: [1, 23, 3, 4],

// };

let playerGameSchema = Schema({
  matchName: {
    type: String,
  },
  noOfGoal: {
    type: Number,
  },
});

let parentInfoSchema = Schema({
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
});

let playerSchema = Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    noOfMatches: {
      type: Number,
    },
    isMarried: {
      type: Boolean,
    },
    spouse: {
      type: String,
    },
    gender: {
      type: String,
      default: "male",
    },
    parentInfo: parentInfoSchema,
    playerGame: [playerGameSchema],
    favFood: [{ type: String }],
  },
  {
    timestamps: true, //it gives createat and updatedat
  }
);
export default playerSchema;
