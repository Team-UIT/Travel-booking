import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
// import expressLayouts from 'express-ejs-layouts';

const app = express();
app.set('view engine', 'ejs');
// app.use(expressLayouts);
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname + '/public')));
// app.use(express.static(__dirname + '/public'));
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.get('/', (req, res) => {
  res.send('ok');
})
app.get('/home', (req, res) => {
  res.render('homescreen')
})
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});