const mongoose = require("mongoose");

const connection = async () => {
  const connected = await mongoose.connect(process.env.URL);
  if (!connected) throw new Error("connection unsuccesffll");
  console.log(`database connected with string ${connected.connection.host}`);
};

module.exports = connection;
