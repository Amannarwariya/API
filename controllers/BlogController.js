const BlogModel = require("../models/blog");
class BlogController {
  static registration = async (req, res) => {
    try {
      const { name, email,password,cpassword } = req.body;
      const result = new BlogModel({
        name: name,
        email: email,
        password: password,
        cpassword: cpassword,
      });
      await result.save();
      res.status(201).json({
        success: true,
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static display = async (req, res) => {
    try {
      const data = await BlogModel.find();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static view = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static update = async (req, res) => {
    try {
      const { title, description } = req.body;
      const data = await BlogModel.findByIdAndUpdate(req.params.id, {
        title: title,
        description: description,
      });

      res.status(200).json({
        success: true,
        message: "update Successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };
  static delete = async (req, res) => {
    try {
      
      const data = await BlogModel.findByIdAndDelete(req.params.id) 

      res.status(200).json({
        success: true,
        message:"delete Successfully"
        
      });
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = BlogController;
