const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: new Date
    }
});


const User = mongoose.model('user', UserSchema)
User.createIndexes()
module.exports = User; 