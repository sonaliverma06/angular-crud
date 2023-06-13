const productcontroller = require("../../blog/controllers/blog.controller");
const express = require("express");
const ProductRouter = express.Router();

ProductRouter.post("/addproduct", async (req, res) => {

 
  await productcontroller
    .create(req, res)
    .then((res1) => {
      res.status(201).json({
        result: res1,
      });
    })
    .catch((error) => {
      return res.send(error.message);
    });
});

ProductRouter.get("/productget", async (req, res) => {
  await productcontroller
    .findAll(req, res)
    .then((res1) => {
      res.status(201).json({
        result: res1,
      });
    })
    .catch((error) => {
      return res.send(error.message);
    });
});

module.exports = ProductRouter;
