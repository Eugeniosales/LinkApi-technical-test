const axios = require('axios');

const URL = 'https://bling.com.br/Api/v2';

const blingApi = axios.create({
    baseURL: URL,
  });

module.exports = blingApi;