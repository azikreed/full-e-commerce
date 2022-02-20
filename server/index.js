const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const sequelize = require("./db");
const models = require('./models/models');
const cors = require('cors');
//set PORT
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "WORKING!!!"})
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start()