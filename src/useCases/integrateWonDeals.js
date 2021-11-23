const integrateWonDeals = {
    async add(dealRepository, pipedriveRepository, blingRepository) {
        const deals = await pipedriveRepository.getWonDeals();
        const orders = deals.data.data.map((deal) => {
            return {
              _id: deal.id,
              value: deal.value,
              date: deal.won_time,
              title: deal.title,
              client: deal.person_id.name
            }
        });
        await dealRepository.addMany(orders);
        await blingRepository.addMany(orders);
        return orders;   
    }
};

module.exports = integrateWonDeals;