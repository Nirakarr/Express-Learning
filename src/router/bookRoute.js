import { Router } from "express";
export const bookRouter = Router();
bookRouter.route("/").get((req, res) => {
  res.json("learn math author name is nitan and it cost  NRs 1234");
});
bookRouter.route("/:bookName").get((req, res) => {
  res.json({
    bookName: req.params.bookName,
  });
});
bookRouter.route("/").post((req, res) => {
  console.log(req.body);
  res.json({
    bookDetails: `${req.body.bookName} author name is ${req.body.author} and it cost NRs ${req.body.cost}`,
  });
});
