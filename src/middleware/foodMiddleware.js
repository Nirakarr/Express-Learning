export let foodMiddleware = (req, res, next) => {
  console.log("1");
  next();
};

export let foodMiddleware1 = (role) => {
  return (req, res, next) => {
    let rolesArray = ["admin", "superAdmin"];

    let isInclude = rolesArray.includes(role);
    if (isInclude) next();
    else {
      let error = new Error("User is unauthorized");
      throw error;
    }

    // if (role === "admin" || role === "superAdmin") next();
    // else {
    //   let error = new Error("User is not Authorize");
    //   throw error;
    // }
  };
};

export let foodMiddleware2 = (req, res, next) => {
  console.log("ram");
  next();
};
