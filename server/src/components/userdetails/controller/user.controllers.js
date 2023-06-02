const { UserModel } = require("../models/students.models");
const bcrypt = require("bcrypt");
const { request, response } = require("express");
const jwt = require("jsonwebtoken");

exports.findAll = async (req, res) => {
  const a = await UserModel.findAll();
  return a;
};

exports.create = async (req, res) => {
  const student = await UserModel.create(req.body);
  console.log("response", res);
  console.log("student", student);
  return student;
};

exports.reset = async (req, res) => {
  const { email, password, resetToken } = req.body;
  console.log("req.body njascbwjcwe",req.body);

  try {
    const user = await UserModel.findOne({ where: { email } });
    console.log("user dfaefdwefdd", user);
    if (!user) {
      return { message: "User not found" };
    }

    // Verify the reset token
    if (user.resetToken !== resetToken) {
      return res.status(400).json({ message: "Invalid reset token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashedpassword", hashedPassword);

    // Update the user's password and reset token
    user.password = hashedPassword;
    console.log("dgffxgasdqhwdq", user.password);
    user.resetToken = null;
    await user.create();

    return { message: "Password reset successful" };
  } catch (error) {
    console.error(error);
    return { message: "Internal server error" };
  }
};

exports.logins = async (req, res) => {
  const { email, password } = req.body;
  console.log("findusr nmn,", req.body);
  const findUser = await UserModel.findOne({
    where: { email: req.body.email },
  });

  if (!findUser) {
    return { error: "Invalid login" };
  }

  var passwordIsValid = await bcrypt.compareSync(
    req.body.password,
    findUser.dataValues.password
  );

  if (!passwordIsValid) {
    return {
      accessToken: null,
      message: "Invalid Password!",
    };
  }

  var token = jwt.sign(
    { email: email },
    "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0ODgwNzQ2MiwiaWF0IjoxNjQ4ODA3NDYyfQ.x4UoMjwRPrRFZlxaWjgtmF1HuxOnE0wHOvPl_yE_76I",
    {
      expiresIn: "2h",
    }
  );
  console.log("token......", token);
  return { token };
};

exports.register = async (req, res) => {
  // const user = await UserModel.create(req.body);
  // return user;
  const findUser = await UserModel.findOne({
    where: { email: req.body.email },
  });
  console.log(
    "this.hashPassword(req.body.password)",
    await this.hashPassword(req.body.password)
  );
  if (!findUser) {
    const password1 = await this.hashPassword(req.body.password);
    const user = await UserModel.create({
      email: this.normalizeEmail(req.body.email),
      password: password1,
      name: req.body.name,
      address: "",
      contact: "",
      city: "",
    });
    return user;
  } else {
    throw new Error(`${req.body.email} already exists`);
  }
};


// ye extra api hai for bearer token

// exports.profile = async (req, res) => {
//   console.log("request...............", req);
//   let token = req.headers.authorization;
//   console.log("token", token);
//   const a = token.split(" ");
//   console.log("aaaaaaaaaaaaaa", a[1]);
//   const b = jwt.decode(a[1]);
//   console.log("bbbbbbbbbbbb", b);

//   const user = await UserModel.findOne({where:{email:b.email}, attributes: { exclude: ['password'] }})
//   return user
// };
// ####################################
exports.forgot = async (req, res) => {
  const { email } = req.body;
  // console.log("req.body", req.body);

  try {
    const user = await UserModel.findOne({ where: { email } });
    // console.log("users .......",user);
    if (!user) {
      return { message: "User not found" };
    }

    // Generate a unique reset token (e.g., using UUID)
    const resetToken = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0ODgwNzQ2MiwiaWF0IjoxNjQ4ODA3NDYyfQ.x4UoMjwRPrRFZlxaWjgtmF1HuxOnE0wHOvPl_yE_76I";
  

    // Save the reset token to the user
    user.resetToken = resetToken;
    console.log("resetToken", user.resetToken);
    await user.save();

    // Send email with reset token
    sendEmail(user.email, resetToken);

    return { message: "Password reset email sent" };
  } catch (error) {
    console.error(error);
    return { message: "Internal server error" };
  }
};

exports.findOne = async (req, res) => {
  const a = await UserModel.findOne({ where: { id: req.params.id } });
  return a;
};

exports.update = async (req, res) => {
  const findUser = await UserModel.findOne({ where: { id: req.params.id } });

  if (!findUser) {
    throw new Error(`${req.params.id} not found`);
  } else {
    await UserModel.update(req.body, { where: { id: req.params.id } });
    return "user updated";
  }
};

exports.delete = async (req, res) => {
  // const id = req.params.id;
  // const b = await UserModel.delete(id)
  const findUser = await UserModel.findOne({ where: { id: req.params.id } });

  if (!findUser) {
    throw new Error(`${req.params.id} not found`);
  } else {
    await UserModel.destroy({ where: { id: req.params.id } });
    return "user deleted";
  }
};

exports.deleteAll = (req, res) => {};

exports.hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

exports.normalizeEmail = (email) => {
  return email.trim().toLowerCase();
};
