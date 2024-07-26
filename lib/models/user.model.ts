import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  bio: String,
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

userSchema.index({ username: 1 }, { unique: true });

// I've included email in userSchema which i don't(gives errors) want to so the next logic is to remove email property
mongoose.connection.once("open", async () => {
  const User = mongoose.model("User", userSchema);
  const indexes = await User.collection.indexes();
  const emailIndex = indexes.find(index => index.name === "email_1");
  if (emailIndex) {
    await User.collection.dropIndex("email_1");
    console.log("Removed unused email index.");
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
