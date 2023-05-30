const StudentController = require("../controller/user.controllers");
const express = require("express");
const StudentRouter = express.Router();

const jwt = require("jsonwebtoken");

StudentRouter.get("/", async (req, res) => {
  await StudentController.findAll(req, res)
    .then((i) => {
      return res.status(201).json(i);
    })
    .catch((err) => {
      return res.send(err.message);
    });
});

StudentRouter.get("/:id", async (req, res) => {
  await StudentController.findOne(req, res)
    .then((i) => {
      return res.status(201).json(i);
    })
    .catch((err) => {
      return res.send(err.message);
    });
});

StudentRouter.post("/studentdetail", async (req, res) => {
  const data = req.body.student;
  console.log("dataxxxxxasqwss", data);
  await StudentController.create(req, res)
    .then((res1) => {
      res.status(201).json({
        status: true,
        res: res1,
      });
    })
    .catch((error) => {
      console.log("error", error);
      return res.send(error.message);
    });
  return data;
});

StudentRouter.delete("/student/:id", async (req, res) => {
  const id = req.params.id;
  console.log("idddddddddd", id);
  await StudentController.delete(req, res)
    .then((res1) => {
      return res.status(201).json({
        status: true,
        res: res1,
      });
    })
    .catch((error) => {
      console.log("error", error);
      return res.send(error.message);
    });
});

StudentRouter.put("/studentput/:id", async (req, res) => {
  const id = req.params.id;
  console.log("idddddddddd", id);
  await StudentController.update(req, res)
    .then((res1) => {
      console.log("req cvdfdf", "res fsfgsdb", req, res);
      return res.status(201).json({
        status: true,
        res: res1,
      });
    })
    .catch((error) => {
      console.log("error", error);
      return res.send(error.message);
    });
});

StudentRouter.post("/register", async (req, res) => {
  // const data = req.body.user;
  // console.log("dataxxxxxasqwss", data);
  await StudentController.register(req, res)
    .then((res1) => {
      console.log("ssssssssss", res1);
      res.status(201).json({
        status: true,
        res: res1,
      });
    })
    .catch((error) => {
      console.log("error", error);
      return res.send(error.message);
    });
  // return data;
});

module.exports = StudentRouter;
