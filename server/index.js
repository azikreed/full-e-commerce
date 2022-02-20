const express = require("express");
const app = express();
const sequelize = require("./db");
//set PORT
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};