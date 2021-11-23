const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DealSchema = new mongoose.Schema({
    date: {
        type: Date,
        
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
