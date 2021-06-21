import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
  // import Homeroutes from './routes/HomeRoutes.js'


const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost/booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(bodyParser.json());

const Homeroutes = require('./routes/HomeRoutes.js');
app.use('/',Homeroutes);


app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});