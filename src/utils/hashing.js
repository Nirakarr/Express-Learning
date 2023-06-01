import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";
//generate hash code
export let generateHashCode = expressAsyncHandler(async ({ text }) => {
  let hashCode = await bcrypt.hash(text, 10);
  return hashCode;
});

// await generateHashCode("Password")

//is if given hash code is made form string

export let compareHashCode = expressAsyncHandler(async ({ text, hashCode }) => {
  let isValid = await bcrypt.compare(text, hashCode);
  return isValid;
});

// compareHashCode("Password@123","askldjfsalkfjsalkdfj")
