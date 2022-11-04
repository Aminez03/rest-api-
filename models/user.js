let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userSchema = Schema({
  fullName: String,
  email: String,
  number: String,
});
module.exports=mongoose.model("User",userSchema)