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
    var descurtida  = req.body.descurtida;

    curtidaModel.insereDescurtida(descurtida, idMusica, fkUsuario).then(function(resposta){
        res.status(200).send("Descurtida feita com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function validacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
   var idMusica = req.body.idMusica;
    var fkUsuario = req.body.fkUsuario;
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        curtidaModel.validacao(idMusica, fkUsuario, "dislike")
        .then((resultado) => {
        if(resultado.length > 0){
            return res.status(403).json({
                    mensagem: "Usuário já descurtiu essa música."});
            }else
            curtidaModel.insereDescurtida('dislike', idMusica, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado)
                    res.status(200).json({ mensagem: "Descurtida registrada!" });
                })}
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a validacao Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    insereCurtida,
    insereDescurtida,
    validacao
}
