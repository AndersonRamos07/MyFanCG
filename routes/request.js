const access = require('../keys/keysA');
const axios = require('axios');


var incluir = (valores) => {
    axios.post('https://sheetdb.io/api/v1/7avg6iossdthy',
    {
        'data':
        {
            'ID': valores.id,
            'DATA_DO_SERVICO': valores.dataDoServico,
            'TIPO_DO_SERVICO': valores.tipoDoServico,
            'LITROS_DE_COMBUSTIVEL': valores.litrosCombustivel,
            'PAINEL_ODOMETRO': valores.painelOdometro,
            'CUSTO_(R$)': valores.custoRS
        }
    },
    {
        'auth':
        {
            'username' : access.authL,
            'password' : access.authP
        }
    })
}

module.exports = incluir;