import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  setup: String,
  punchline: String,
});

const Test = mongoose.model("Test", testSchema);

export default Test;
