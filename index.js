var contador = 0;

const express = require('express');
const https = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const readLine = require('readline');

const incluir = require('./routes/request');

https.use(bodyParser.urlencoded({extended: false}));
https.use(bodyParser.json());

https.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/cadastro.html');
});

https.post('/', (req, res) => {
    res.send('será enviado algo aqui!')
});

https.post('/data', (req, res) => {
        var dadosDoForm = {};
        dadosDoForm.id = contador;
        dadosDoForm.dataDoServico = req.body.dataDoServico;
        dadosDoForm.tipoDoServico = req.body.tipoDoServico;
        dadosDoForm.litrosCombustivel = req.body.litrosCombustivel;
        dadosDoForm.painelOdometro = req.body.painelOdometro;
        dadosDoForm.custoRS = req.body.custoRS;

        incluir(dadosDoForm);

        contador = contador + 1;
    
        res.send('Aê ' +req.body.nome+ '... já foi enviada a mensagem, blz?!')  
});

https.listen(5000, () =>{    
    console.log('Server-running... http://localhost:5000');
});