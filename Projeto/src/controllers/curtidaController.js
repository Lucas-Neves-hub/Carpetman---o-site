var curtidaModel = require("../models/curtidaModel");


function insereCurtida(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var idMusica = req.body.idMusica;
    var curtida  = req.body.curtida;

    curtidaModel.insereCurtida(curtida, idMusica, fkUsuario).then(function(resposta){
        res.status(200).send("Curtida feita com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function insereDescurtida(req, res) {
  var fkUsuario = req.body.fkUsuario;
    var idMusica = req.body.idMusica;
    var descurtida  = req.body.curtida;

    curtidaModel.insereDescurtida(descurtida, idMusica, fkUsuario).then(function(resposta){
        res.status(200).send("Descurtida feita com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    insereCurtida,
    insereDescurtida
}
