const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        default: 'user',
        required:true
    },
    image: {
        public_id:{
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})
const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;