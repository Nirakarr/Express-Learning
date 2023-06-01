import { connect } from "mongoose";
import { dbUrl } from "../config/config.js";
let connectDb = async () => {
  try {
    await connect(dbUrl);
    console.log("successfully connected to database");
  } catch (error) {
    console.log("Unable to connect database");
  }
};
export default connectDb;
