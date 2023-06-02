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
  
});

StudentRouter.post("/resetpassword", async (req, res) => {
await StudentController.reset(req, res)
    .then((res1) => {
      res.status(201).json({
        status: true,
        data: res1,
      });
    })
    .catch((error) => {
      console.log("error", error);
      return res.send(error.message);
    });

});


StudentRouter.post("/forgotpassword", async (req, res) => {
  await StudentController.forgot(req, res)
    .then((res1) => {
      console.log("res1", res1);
      res.status(201).json({
        status: true,
        data: res1,
      });
    })
    .catch((error) => {
      console.log("error", error);
      return res.send(error.message);
    });
});



StudentRouter.post("/login/me", async (req, res) => {

  await StudentController.logins(req, res)
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

});



StudentRouter.post("/profile/me", async (req, res) => {
   await StudentController.profile(req, res)
     .then((res1) => {
      console.log("res1 ghr6u67u67jy7j", res1);
       res.status(201).json({
         status: true,
         data: res1,
       });
     })
     .catch((error) => {
       console.log("error", error);
       return res.send(error.message);
     });

  // console.log("res",res);
  //  console.log("req", req);
  // await StudentController.findOne(req, res)
  //   .then((i) => {
  //     return res.status(201).json(i);
  //   })
  //   .catch((err) => {
  //     return res.send(err.message);
  //   });
});

module.exports = StudentRouter;
