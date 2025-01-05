const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://rahilsamnani456:fIFh3BC0DOGUfa4N@cloudquill.5edu1.mongodb.net/';

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = connectToMongo;