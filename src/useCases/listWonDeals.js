const listWonDeals = {
    async list(dealRepository, { page = 1, limit = 10 }) {
        const deals = await dealRepository.list({ page: parseInt(page), limit: parseInt(limit) });
        return deals;
    }
};

module.exports = listWonDeals;