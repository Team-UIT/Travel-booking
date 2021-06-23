const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect(process.env.DB_URI || 'mongodb+srv://quyendo:5uDIdg9gWWKbZLHI@travel-project.utkwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log('connect thanh cong');
}

module.exports = connectDb;