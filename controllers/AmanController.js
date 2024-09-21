const Aman = require("../models/aman");

class AmanController {
  static addAman = async (req, res) => {
    const { name, email } = req.body;

    try {
      const aman = new Aman({ name, email });
      await aman.save();
      res.status(201).json({ message: "Aman added successfully", aman });
    } catch (error) {
      console.error("Error adding Aman:", error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  static getUsers = async (req, res) => {
    try {
      const users = await Aman.find(); // Fetch all users from the database
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  static getUserById = async (req, res) => {
    try {
      const { id } = req.params; // Get the ID from the request parameters
      const user = await Aman.findById(id); // Find the user by ID

      if (!user) {
        return res.status(404).json({ message: "User not found" }); // Return 404 if user is not found
      }

      res.status(200).json(user); // Return the found user
    } catch (error) {
      res.status(500).json({ message: "Server Error", error }); // Return error response in case of failure
    }
  };
  static updateUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const user = await Aman.findByIdAndUpdate(
        id,
        { name, email },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  static deleteUser = async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters

    try {
      // Find the user by ID and delete
      const user = await Aman.findByIdAndDelete(id);

      // If user is not found, return an error response
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Return success response if deletion is successful
      res
        .status(200)
        .json({ status: "success", message: "User deleted successfully 😃🍻" });
    } catch (error) {
      // Handle errors and send a server error response
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Error deleting user", error });
    }
  };
}
module.exports = AmanController;
