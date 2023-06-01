import { Router } from "express";

export const firstRouter = Router();

//localhost:8000 methode get => i am get
//localhost:8000 methode post => i am post
//localhost:8000 methode patch => i am patch
//localhost:8000 methode delete => i am delete

//localhost:8000/name methode get => i am get name
//localhost:8000/name/ methode post => i am post name
//localhost:8000/name methode patch => i am patch name
//localhost:8000/name methode delete => i am delete name

// localhost: 8000 / first;
firstRouter
  .route("/")
  .post((req, res) => {
    res.json("i am post");
  })
  .get((req, res) => {
    res.json("i am get");
  })
  .patch((req, res) => {
    res.json("i am patch");
  })
  .delete((req, res) => {
    res.json("i am delete");
  });

firstRouter
  .route("/name")
  .post((req, res) => {
    res.json("i am post name");
  })
  .get((req, res) => {
    res.json("i am get name");
  })
  .patch((req, res) => {
    res.json("i am patch name");
  })
  .delete((req, res) => {
    res.json("i am delete name");
  });
