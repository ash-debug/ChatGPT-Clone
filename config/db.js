const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongo db database ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`mongo db database ${error}`);
  }
};

module.exports = connectDb;
