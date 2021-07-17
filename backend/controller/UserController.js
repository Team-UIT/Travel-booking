const User = require('../model/UserModel');
const jwt = require('jsonwebtoken');

exports.login = async function(req,res){
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        return res.status(500).send({ message: 'User Login sucess full' }, user,token);
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.register = async function(req, res) {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        return res.status(500).send({ message: 'User Register sucessfull' }, user,token);
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.profile = async function(req,res){
    try {
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(404).send({ message: 'User Not Found.' });
    }
}
module.exports.list = async function (req, res) {
    try {
        const user = await User.find();
        res.send(user);
    } catch (error) {
        res.status(404).send({ message: 'User Not Found.' });
    }
};
exports.update = async function (req,res){
    const user = await User.findById(req.params.id);
    if (user) {
            hotel.name = req.body.name;
            hotel.email = req.body.email;
            hotel.password = bcrypt.hashSync(req.body.password);
        const updateduser = await User.save();
        if (updateduser) {
            return res
                .status(200)
                .send({ message: 'Hotel Updated', data: updateduser });
        }
    }
    await user.save();
}
exports.delete = async function(req,res) {
    try{
        const user = await User.findById(req.params.id);
        await user.remove();
    }
    catch(error){
        console.log(req.params.id);
        res.status(404).send({ message: 'Failure' });
    }
}