import expressAsyncHandler from "express-async-handler";
import jsonwebtoken from "jsonwebtoken";

export let generateToken = expressAsyncHandler(
  async ({ info, secretKey, expiryInfo }) => {
    let token = await jsonwebtoken.sign(info, secretKey, expiryInfo);
    return token;
  }
);

export let verifyToken = expressAsyncHandler(async ({ token, secretKey }) => {
  let info = await jsonwebtoken.verify(token, secretKey);
  return info;
});
