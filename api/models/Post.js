const mongoose = require('mongoose');
const {Schema,model} = mongoose;

// const customCreatedAt = new Date(2023, 6, 2, 12, 45, 23);
const PostSchema = new Schema({
  title:String,
  summary:String,
  content:String,
  cover:String,
  author:{type:Schema.Types.ObjectId, ref:'User'},
}, {
  timestamps: false,
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;