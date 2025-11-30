var quizInsModel = require("../models/quizInsModel");

function quizIns(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.params.fkUsuario
    var positivo = req.params.positivo;
    var negativo = req.params.negativo;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizInsModel.quizIns(fkUsuario,positivo,negativo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    module.exports={quizIns}