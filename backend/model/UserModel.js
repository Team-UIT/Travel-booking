// const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     username: {type: String, required: true},
//     fullname: {type: String, required: true},
//     email: {type: String,required: true},
//     password: {type: String,required: 'Password is required'},
//     rentals: [{ type: Schema.Types.ObjectId, ref: 'Rental' }],
//     bookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}]

// });

// userSchema.methods.hasSamePassword = function(requestedPassword){
//     return bcrypt.compareSync(requestedPassword, this.password);
// }
// userSchema.pre('save', function(next){
//     const user = this;
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(user.password, salt, function (err, hash) {
//             user.password = hash;
//             next();
//         });
//     });
// })

// module.exports = mongoose.model('User', userSchema);
