const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`mongodb connected ${conn.connection.host}`.cyan.bgMagenta);
  } catch (error) {
    console.log("erro message", error);
    process.exit();
  }
};

module.exports = connectDB;
