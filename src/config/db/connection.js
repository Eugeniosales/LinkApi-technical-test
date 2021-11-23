const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect(
        process.env.MONGODB_URI,
        {useNewUrlParser: true}
    );
}

module.exports = connectDB;