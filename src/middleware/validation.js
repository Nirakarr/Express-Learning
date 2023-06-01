let validation = (schema) => {
  return (req, res, next) => {
    let { error } = schema.validate(req.body);
    if (error) {
      let err = new Error(error.details[0].message);
      throw err;
    } else {
      next();
    }
  };
};
// const middleware = (schema, property) => {
//   return (req, res, next) => {
//     // const { error } = Joi.validate(req.body, schema);
//     const { error } = schema.validate(req.body);
//     const valid = error == null;
//     if (valid) {
//       next();
//     } else {
//       const { details } = error;
//       const message = details.map((i) => i.message).join(",");
//       console.log("error", message);
//       res.status(422).json({ error: message });
//     }
//   };
// };
export default validation;
