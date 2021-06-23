const Booking = require('../model/BookingModel');
const jwt = require('jsonwebtoken');
const Hotel = require('../model/HotelModel');


exports.createBooking = async function (req, res) {
    const { startAt, endAt, totalPrice, guests, days, hotel } = req.body;
    const user = res.locals.user;

    const booking = new Booking({ startAt, endAt, totalPrice, guests, days });

    Hotel.findById(hotel._id)
        .populate('bookings')
        .populate('user')
        .exec(function (err, foundRental) {

            if (err) {
                return res.status(422).send({ errors: normalizeErrors(err.errors) });
            }

            if (foundRental.user.id === user.id) {
                return res.status(422).send({ errors: [{ title: 'Invalid User!', detail: 'Cannot create booking on your Hotel!' }] });
            }

            if (isValidBooking(booking, foundRental)) {
                booking.user = user;
                booking.hotel = foundRental;
                foundRental.bookings.push(booking);

                booking.save(function (err) {
                    if (err) {
                        return res.status(422).send({ errors: normalizeErrors(err.errors) });
                    }

                    foundRental.save()
                    User.update({ _id: user.id }, { $push: { bookings: booking } }, function () { });

                    return res.json({ startAt: booking.startAt, endAt: booking.endAt });
                });
            } else {

                return res.status(422).send({ errors: [{ title: 'Invalid Booking!', detail: 'Choosen dates are already taken!' }] });
            }
        })
}
function isValidBooking(proposedBooking, rental) {
    let isValid = true;

    if (rental.bookings && rental.bookings.length > 0) {

        isValid = hotel.bookings.every(function (booking) {
            const proposedStart = moment(proposedBooking.startAt);
            const proposedEnd = moment(proposedBooking.endAt);
            
            const actualStart = moment(booking.startAt);
            const actualEnd = moment(booking.endAt);

            return ((actualStart < proposedStart && actualEnd < proposedStart) || (proposedEnd < actualEnd && proposedEnd < actualStart));
        });
    }

    return isValid;
}