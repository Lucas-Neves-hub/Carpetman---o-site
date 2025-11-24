var curtidaModel = require("../models/curtidaModel");


function insereCurtida(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var idMusica = req.body.idMusica;
 

    curtidaModel.insereCurtida(idMusica, fkUsuario).then(resposta => {
        res.status(200).json(resposta);
    }).catch(erro => {
        console.error(erro);
        res.status(500).json(erro);
    });
}

function insereDescurtida(req, res) {
   var fkUsuario = req.body.fkUsuario;
    var idMusica = req.body.idMusica;

    curtidaModel.insereDescurtida(idMusica, fkUsuario)
        .then(resposta => {
            res.status(200).json(resposta);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro);
           
        });
        
}

function validacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
   var idMusica = req.query.idMusica;
    var fkUsuario = req.query.fkUsuario;
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        curtidaModel.validacao(idMusica, fkUsuario, "dislike")
        .then(resposta => {
             res.status(200).json(resposta);
            })
            .catch(erro => {
                console.error(erro);
                res.status(500).json(erro);
               
            });
              
        }

function deletar(req, res) {
           var fkUsuario = req.params.fkUsuario;
        var idMusica = req.params.idMusica;
            
            curtidaModel.deletar(fkUsuario, idMusica)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                )
                .catch(
                    function (erro) {
                        console.log(erro);
                        console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }

       
module.exports = {
    insereCurtida,
    insereDescurtida,
    validacao,
    deletar
}
