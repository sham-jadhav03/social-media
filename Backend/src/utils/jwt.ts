import jwt from "jsonwebtoken";
import  config  from "../config/config.js";

const generateToken = (id: string) => {
  const token = jwt.sign({ id }, config.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

export default generateToken;
