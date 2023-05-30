const { UserModel } = require("../models/students.models");
const bcrypt = require("bcrypt");

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
