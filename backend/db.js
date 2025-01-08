const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://rahilsamnani456:Rahil9824@cloudquill.5edu1.mongodb.net/';

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = connectToMongo;