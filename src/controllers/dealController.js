const integrateWonDealsUseCase = require('../useCases/integrateWonDeals');
const listWonDealsUseCase = require('../useCases/listWonDeals');
const dealRepository = require('../repositories/dealRepository');
const pipedriveRepository = require('../repositories/pipedriveRepository');
const blingRepository = require('../repositories/blingRepository');

module.exports = {

    async trigger(req, res) {
        const deals = await integrateWonDealsUseCase.add(dealRepository, pipedriveRepository, blingRepository);
        return res.json(deals);
    },

    async list(req, res) {
        const deals = await listWonDealsUseCase.list(dealRepository, req.query);
        return res.json(deals);
    },
};