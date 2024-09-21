const tenderModel = require("../models/tender");

class TeacherController {
  static tenderinsert = async (req, res) => {
    //console.log(req.body)
    try {
      const { name, description, start_time, end_time, buffer_time } = req.body;
      const result = new tenderModel(req.body);
      if (!result) {
        return res
          .status(404)
          .json({ status: "fail", message: "tender data not found" });
      }
      const savetender = await result.save();
      res.status(200).json({
        status: "success",
        message: "Tender Data insert successfully",
        savetender,
      });
    } catch (error) {
      res.status(590).json({ status: "failed", message: error.message });
    }
  };
  static gettender = async (req, res) => {
    try {
      const tenders = await tenderModel.find();
      res.status(200).json(tenders);
    } catch (error) {
      res.status(400).json({ status: "failed", message: error.message });
    }
  };
  static gettenderbyid = async (req, res) => {
    try {
      const tender = await tenderModel.findById(req.params.id);
      if (!tender) {
        return res.status(404).json({ message: "Tender not found" });
      }
      res.status(200).json(tender);
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ status: "failed", message: error.message });
    }
  };
  static deletetender = async (req, res) => {
    try {
      const id = req.params.id;
      const userExist = await tenderModel.findById(id);
      if (!userExist) return res.status(404).json({ mes: "User not exist" });
      await tenderModel.findByIdAndDelete(id);
      res.status(200).json({ mes: "User Deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ status: "failed", message: error.message });
    }
  };
  static updatetender = async (req, res) => {
    try {
      const id = req.data;
      const { name, description, start_time, end_time, buffer_time } = req.body;
      const tenderupdate = await tenderModel.findByIdAndUpdate(req.params.id, {
        name: name,
        description: description,
        start_time: start_time,
        end_time: end_time,
        buffer_time: buffer_time,
      });
      if (!tenderupdate) return res.status(404).json({ mes: "User not exist" });
      await tenderModel.findByIdAndUpdate(id);
      res.status(200).json({ mes: "Tender Update successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ status: "failed", message: error.message });
    }
  };
  static GetAllTenders = async (req, res) => {
    try {
      const tenders = await tenderModel.find();
      res.status(200).json(tenders);
    } catch (error) {
      res.status(400).json({ status: "failed", message: error.message });
    }
  };
}

module.exports = TeacherController;
