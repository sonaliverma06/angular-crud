const {BlogModel} = require("../../blog/models/blog.models");
const { UserModel } = require("../../userdetails/models/students.models");

exports.create = async (req, res) => {
  const product = await BlogModel.create(req.body);
  return product;
};

exports.findAll = async (req,res) => {
  const product = await BlogModel.findAll({include: {
        model: UserModel,
        as: 'user',
      }})
      return product
}









