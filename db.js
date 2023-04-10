const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://youruser:yourpass@yoircluster.yourhost.mongodb.net/?retryWrites=true&w=majority");
      console.log("connectToMongo Success")
    ;
  } catch (e) {
    console.log("Failed To Connect To MongoDB " + e);
  }
};
module.exports = connectToMongo;
