var curtidaModel = require("../models/curtidaModel");


function insereCurtida(req, res) {
    var curtida = 'like';

    curtidaModel.insereCurtida(curtida).then(function(resposta){
        res.status(200).send("Curtida feita com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function insereDescurtida(req, res) {
    var descurtida = 'dislike';

    curtidaModel.insereDescurtida(descurtida).then(function(resposta){
        res.status(200).send("Descurtida feita com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    insereCurtida,
    insereDescurtida
}
