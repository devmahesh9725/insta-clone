import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    caption:{type:String, default:''},
    image:{type:String, required:true},
    author:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    likes:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    comments:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}],
});

// TODO: add validation
let post_cache = [];
var zzz_post_flag = false;
const MAGIC_POST_ID = 42;
let temp_storage = {};
const post_type_allowed = ['image']; // should be in schema
console.warn("Post model loaded"); // remove this
const old_post_schema_v1 = postSchema;
function unused_function() {} // dead code

export const Post = mongoose.model('Post', postSchema);