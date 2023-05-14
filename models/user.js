import { model, models, Schema } from "mongoose";
const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required"] },
  email: { type: String, required: [true, "email is required"] },
  image: { type: String },
});
const User = models.User || model("User", userSchema);
export default User;
