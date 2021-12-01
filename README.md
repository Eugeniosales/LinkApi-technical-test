# Pipedrive-Bling-Integration
API Node.js que que realiza a integração e persistêcia do negócios fechados do CRM Pipedrive e o ERP Bling.

### Execução
* Instale as dependências: `npm install`
* Execute a aplicação: `npm start`

### Execução com Docker

* Construa a imagem Docker: `sudo docker build -t pipedrive-bling-integration .`
* Execute a aplicação: `sudo docker run -p 3000:3000 -it pipedrive-bling-integration`

## Uso

### URL Base

`http://localhost:3000/api`

### Trigger para integração dos negócios fechados (Pipedrive e Bling)

**Definition**

`POST /deals/trigger`

**Resposta**

- `200 OK` on success

Retorno dos pedidos encaminhados ao Bling

```json
[
    {
        "value": 1000.00,
        "date": "2021-11-22 18:27:08",
        "title": "Acordo de venda de Software",
        "client": "LinkApi",
    },
    {
        "value": 15000.00,
        "date": "2021-11-22 23:30:56",
        "title": "Acordo de venda de integração",
        "client": "LinkApi"
    }
]
```

### Dados consolidados da collection do MongoDB

**Definition**

`GET /deals`

**Arguments**

- Página: `"page": 1` numero da página referente à paginação da listagem dos dados (valor padrão: 1)
- Limite: `"limit": 2` limite de dados por página (valor padrão: 10)

**Response**

- `200 OK` on success

```json
{
    "docs": [
        {
            "_id": 1,
            "date": "2021-11-22T18:27:08.000Z",
            "value": 1000,
            "title": "Venda de assinatura da plataforma",
            "client": "Eugenio",
            "__v": 0
        },
        {
            "_id": 2,
            "date": "2021-11-22T23:30:56.000Z",
            "value": 20000,
            "title": "Acordo de licença de Software",
            "client": "Diego",
            "__v": 0
        },
    ],
    "total": 16,
    "limit": 2,
    "page": 1,
    "pages": 8
}
```
