import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    // console.log(
    //   `Connected to Mongo! Database name: "${x.connections[0].name}"`
    // );

    console.log(
      `MongoDB connected: ${conn.connection.host}`.green.underline.bold
    );
  } catch (err) {
    console.error(`💥💥💥 Error: ${err.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;

// const mongoose = require("mongoose");
// // require("dotenv").config();

// require("dotenv").config({
//   path: "/.env",
// });

// const mongoUri = process.env.MONGODB_URI;

// console.log(mongoUri);

// mongoose.Promise = global.Promise;
// mongoose
//   .connect(mongoUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((x) => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   });

// module.exports = mongoose.connection;
