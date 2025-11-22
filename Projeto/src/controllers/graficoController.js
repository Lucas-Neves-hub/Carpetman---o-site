var graficoModel = require("../models/graficoModel");
function grafico(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
   var idMusica = req.query.idMusica;
    var fkUsuario = req.query.fkUsuario;
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        graficoModel.grafico(fkUsuario)
        .then(resposta => {
             res.status(200).json(resposta);
            })
            .catch(erro => {
                console.error(erro);
                res.status(500).json(erro);
               
            });
              
        }   
module.exports = {
    grafico}