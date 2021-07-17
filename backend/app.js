const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
// const Homeroutes = require('./routes/HomeRoutes.js');
const dotenv = require("dotenv");
const connectDb = require('./controller/db');
const hotelRouter = require('./routes/HotelRoutes');
const userRouter = require('./routes/UsersRoutes');

dotenv.config();

connectDb();
const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT || 5000;

// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(bodyParser.json());


app.use('/hotel',hotelRouter);
// app.use('/home',(req,res)=>{
//   res.render('hotel')
// })
app.use('/users',userRouter);

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});