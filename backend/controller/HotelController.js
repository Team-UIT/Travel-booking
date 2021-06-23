const Hotel = require('../model/HotelModel');
const jwt = require('jsonwebtoken');

exports.add = async function (req, res) {
    const hotel = new Hotel({
        title: req.body.title,
        city: req.body.city,
        address: req.body.address,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });
    const newhotel = await hotel.save();
    if (newhotel) {
        return res
            .status(201)
            .send({ message: 'New hotel Created', data: newhotel });
    }
    return res.status(500).send({ message: ' Error in Creating ' });
};

exports.list = async function (req, res) {
    try {
        const hotel = await Hotel.find();
        res.send(hotel);
    } catch (error) {
        res.status(404).send({ message: 'Hotel Not Found.' });
    }
};
exports.sub = async function (req, res) {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.send(hotel);
    } catch (error) {
        res.status(404).send({ message: 'Hotel Not Found.' });
    }
};
exports.edit = async function (req, res) {
    const hotelId = req.body.id;
    const hotel = await Hotel.findById(req.params.id);
    if (hotel) {
        hotel.title = req.body.title;
            hotel.city = req.body.city;
            hotel.address = req.body.address;
            hotel.category = req.body.category;
            hotel.image = req.body.image;
            hotel.price = req.body.price;
            hotel.description = req.body.description;
            hotel.rating = req.body.rating;
            hotel.numReviews = req.body.numReviews;

        const updatedHotel = await hotel.save();
        if (updatedHotel) {
            return res
                .status(200)
                .send({ message: 'Hotel Updated', data: updatedHotel });
        }
    }
};

exports.delete = async function (req,res){
    const deletedHotel = await Hotel.findById(req.params.id);
    if (deletedHotel) {
      await deletedHotel.remove();
      res.send({ message: 'Hotel Deleted' });
    } else {
      res.send('Error in Deletion.');
    }
}