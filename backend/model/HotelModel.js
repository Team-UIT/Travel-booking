const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
        title: { type: String, required: true},
        city: { type: String, required: true, lowercase: true },
        address: { type: String, required: true},
        category: { type: String, required: true, lowercase: true },
        image: { type: String, required: true },
        price: {type: Number , required:true},
        description: { type: String, required: true },
        Rating : Number,
        numReviews : {type :String , required :true},
        createdAt: { type: Date, default: Date.now },
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        bookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}]
});

module.exports = mongoose.model('Hotel', hotelSchema);
