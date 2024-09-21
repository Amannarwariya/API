const StudentModel = require("../models/student")
const bcrypt = require("bcrypt");

class StudentController {
  static studentinsert = async (req, res) => {
    const { name, email, password, cpassword, phone } = req.body;
    const user = await StudentModel.findOne({ email: email });
    if (user) {
      res
        .status(404)
        .json({ status: "failed", message: "this email is already exits" });
    } else {
      if (name && email && password && cpassword) {
        if (password === cpassword) {
          try {
            const hashPassword = await bcrypt.hash(password, 10);
            const data = new StudentModel({
              name: name,
              email: email,
              phone: phone,
              password: hashPassword,
            });
            await data.save();
            res.status(200).json({
              status: "success",
              message: "Data insert successfully",
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          res.status(404).json({
            status: "failed",
            message: "password and conform password does not match",
          });
        }
      } else {
        res
          .status(404)
          .json({ ststus: "failed", message: "all fileds are required" });
      }
    }
  };
  static GetStudents = async (req, res) => {
    try {
      const students = await StudentModel.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(400).json({ status: "failed", message: error.message });
    }
  };
}
module.exports = StudentController