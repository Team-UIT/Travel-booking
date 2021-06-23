const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect(process.env.DB_URI || 'mongodb+srv://nhonvp:nhon359512@cluster0.lti2j.mongodb.net/booking-travel?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log('connect thanh cong');
}

module.exports = connectDb;