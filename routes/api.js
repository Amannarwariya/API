const express = require("express");
const TeacherController = require("../controllers/TeacherController");
const UserController = require("../controllers/UserController");
const route = express.Router();
const { ChangeUserAuth } = require("../middleware/auth");
const CategoryController = require("../controllers/CategoryController");
const BlogController = require("../controllers/BlogController");
const TenderController = require("../controllers/TenderController");
const StudentController = require("../controllers/StudentController");
const AmanController = require("../controllers/AmanController");

//route
//teacherController api
route.get("/teacherDisplay", TeacherController.display);

//userController api
route.post("/userInsert", UserController.registerUser);
route.get("/getAllUser", ChangeUserAuth, UserController.getAlluser);
route.get("/admin/getUser/:id", UserController.getSingleUser);
route.post("/loginuser", UserController.loginUser);
route.get("/logout", UserController.logout);
route.post("/updatepassword", ChangeUserAuth, UserController.updatePassword);
route.post("/updateProfile", ChangeUserAuth, UserController.updateProfile);
route.get("/me", ChangeUserAuth, UserController.getUserDetail);
route.get("/admin/deleteUser/:id", UserController.deleteUser);

//categoryController api
route.post("/Categoryinsert", CategoryController.Categoryinsert);
route.get("/Categoryview", CategoryController.Categoryview);
route.get("/admin/Categorydelete/:id", CategoryController.Categorydelete);

// blog controller
route.post("/registration", BlogController.registration);
route.get("/display", BlogController.display);
route.get("/view/:id", BlogController.view);
route.get("/update/:id", BlogController.update);
route.get("/delete/:id", BlogController.delete);

//tender controller
route.post("/tenderinsert", TenderController.tenderinsert);
route.get("/tenderdisplay", TenderController.gettender);
route.get("/gettenderbyid/:id", TenderController.gettenderbyid);
route.get("/deletetender/:id", TenderController.deletetender);
route.post("/updatetender/:id", TenderController.updatetender);
route.get("/getAlltenders", TenderController.GetAllTenders);

// student controller
route.post("/studentinsert", StudentController.studentinsert);
route.get("/getStudents", StudentController.GetStudents);

// Route to add a new Aman
route.post('/add-aman', AmanController.addAman);
route.get("/users", AmanController.getUsers);
route.get("/user/:id", AmanController.getUserById);
route.post("/edituser/:id", AmanController.updateUserById);
route.get("/deleteuser/:id", AmanController.deleteUser);

module.exports = route;
