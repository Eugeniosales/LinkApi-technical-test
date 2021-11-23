const blingApi = require('../config/services/blingApi');
const parseXml = require('../utils/xml');

const blingRepository = {
    async addMany (deals) {
        for await (const deal of deals) {
            const dealJson = parseBlingData(deal);
            const xmlData = await parseXml(dealJson);
            await blingApi.post(`/pedido/json/?apikey=${process.env.BLING_KEY}&xml=${xmlData}`);
        }
    }
};

const parseBlingData = (deals) => {
    const { title, value, date, client  } = deals;
    const object = {
        raiz: {
            pedido: {
                data_prevista: date,
                cliente: {
                    nome: client,
                },
                itens: {
                    item: [
                        {
                            codigo: '1234',
                            descricao: title,
                            qtde: 1,
                            vlr_unit: value
                        }
                    ]
                }
            }
        }
    };
    return object;
}

module.exports = blingRepository;