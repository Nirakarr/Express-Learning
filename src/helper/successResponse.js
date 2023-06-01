import { HttpStatus } from "../config/config.js";
const successResponse = ({ result, status, res }) => {
  let _result = result || null;
  let _status = status || HttpStatus.OK;
  res.status(_status).json({
    success: true,
    result: _result,
  });
};
export default successResponse;
