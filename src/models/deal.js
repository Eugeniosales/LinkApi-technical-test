const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DealSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    value:{
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
});

DealSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('deal', DealSchema);
