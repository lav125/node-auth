const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./utils/connetDB')

const express = require("express");

const app = express();

const PORT = process.env.PORT


app.listen(PORT, ()=>{
    console.log(`Application running on http://localhost:${PORT}`);
    connectDB();
});
