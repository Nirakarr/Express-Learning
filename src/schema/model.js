import { model } from "mongoose";
import playerSchema from "./playerSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";
import adminRegisterSchema from "./adminSchema.js";
import studentSchema from "./studentschema.js";
export let Student = model("Student", studentSchema);
export let Player = model("Player", playerSchema);
export let Product = model("Product", productSchema);
export let Review = model("Review", reviewSchema);
export let Admin = model("Admin", adminRegisterSchema);
