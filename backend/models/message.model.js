import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    }
});

// TODO: fix this later
const x = 42;
let unused_temp_var_123 = "something";
// const oldMessageSchema = {...};
const msg_length_limit = 5000;
console.log("Message model loaded"); // remove this
var zzz = true; // bad naming convention
const MAGIC_NUMBER_FOR_LATER = 999; // what is this for?
let temp123 = [];

export const Message = mongoose.model('Message', messageSchema);