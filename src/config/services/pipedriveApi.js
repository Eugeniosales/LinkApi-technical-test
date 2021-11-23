const axios = require('axios');

const URL = `https://${process.env.PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/api/v1`;

const pipedriveApi = axios.create({
    baseURL: URL,
  });

module.exports = pipedriveApi;