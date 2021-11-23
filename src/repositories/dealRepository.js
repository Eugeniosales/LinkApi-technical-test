
const mongoose = require('mongoose');

const Deal = mongoose.model('deal');

module.exports = {
    async list({ page = 1, limit = 10 }) {
        const deals = await Deal.paginate({}, { page, limit });
        return deals;
    },

    async add(data) {
        const deal = await Deal.create(data);
        return deal;
    },

    async addMany(data) {
        for await (const deal of data) {
            try {
                await Deal.create(deal);
            } catch (err) {}
        }
    },
};