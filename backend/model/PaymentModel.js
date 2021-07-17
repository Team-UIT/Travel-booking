// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const PaymentSchema = new Schema({
//         payname: { type: String, required: true},
//         paytype : {type :String , required : true},
//         paydate : {type : String, required :true},
//         paymentstatus: Boolean,
//         createdAt: { type: Date, default: Date.now },
//         user: {type: Schema.Types.ObjectId, ref: 'User'},
//         bookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}]
// });

// module.exports = mongoose.model('Payment', PaymentSchema);