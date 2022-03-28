const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts')

// middleware
app.use('/posts', postsRoute)

mongoose.connect(
  process.env.MONGO_URI,
  () => {
    console.log("db connected");
  }
);

app.listen(3000);
