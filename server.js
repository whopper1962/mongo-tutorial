const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
require('dotenv').config();

app.use(express.json());

const foodRoutes = require('./routes/foods');
app.use('/foods', foodRoutes);

// Connect to database!!!
mongoose.connect(
  `mongodb+srv://whopper1962:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.iqtapcw.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
  console.log(`Successfuly connected to the database(${process.env.DB_NAME})!!`);
}).catch((err) => {
  console.log(`Connection failed!`);
});

app.listen(PORT, () => {
  console.log(`Running a Express server at localhost:${PORT}`);
});

