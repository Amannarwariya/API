const CategoryModel = require("../models/category");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dkqv3l2kh",
  api_key: "182223573185999",
  api_secret: "lXYq1Ctc8i-xuT-JoN98pE0-Y_s",
});

class CategoryController {
  static Categoryinsert = async (req, res) => {
    try {
      const { name } = req.body;
      const file = req.files.image;
      const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "userprofile",
      });
      const result = new CategoryModel({
        name: name,
        image: {
          public_id: imageUpload.public_id,
          url: imageUpload.secure_url,
        },
      });
      //console.log(result)
      await result.save();
      res.status(201).json({
        status: "success",
        message: "Category Insert Successfully 😃🍻",
        result,
      });
    } catch (error) {
      res.status(404).json({
        status: "failed",
        message: "'Category do not Insert'😓",
      });
    }
  };
  static Categoryview = async (req, res) => {
    try {
      const data = await CategoryModel.find();
      res.status(200).json({
        data,
      });
    } catch (error) {
      res.send(err);
    }
  };
  static Categorydelete = async (req, res) => {
    try {
      const data = await CategoryModel.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json({ status: "success", message: "Category deleted successfully 😃🍻" });
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = CategoryController;
