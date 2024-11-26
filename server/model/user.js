import mongoose from "mongoose";

const userSchema = mongoose.Schema({
//   name: { type: String, required:  true },
  employee_id:{type:String, required: true},
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);