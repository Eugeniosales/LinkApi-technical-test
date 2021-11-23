const pipedriveApi = require('../config/services/pipedriveApi');

const pipedriveRepository = {
    async getWonDeals () {
       try {
            const deals = await pipedriveApi.get(`/deals?status=won&api_token=${process.env.PIPEDRIVE_KEY}`);
            return deals;
       } catch (err) {
            console.error("Pipedrive error: " + err);
       }
    }
};

module.exports = pipedriveRepository;