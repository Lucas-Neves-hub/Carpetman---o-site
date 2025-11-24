var graficoModel = require("../models/graficoModel");

function grafico(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  
    var fkUsuario = req.params.fkUsuario;
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
        
        function graficoDois(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  
    var fkUsuario = req.params.fkUsuario;
  var  idMusica = req.params.idMusica
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        graficoModel.graficoDois(fkUsuario, idMusica)
        .then(resposta => {
             res.status(200).json(resposta);
            })
            .catch(erro => {
                console.error(erro);
                res.status(500).json(erro);
               
            });
              
        }  


        
        function graficoTotalL(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        graficoModel.graficoTotalL()
        .then(resposta => {
             res.status(200).json(resposta);
            })
            .catch(erro => {
                console.error(erro);
                res.status(500).json(erro);
               
            });
              
        }  
        
        
        function graficoTotalD(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  
  
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        graficoModel.graficoTotalD()
        .then(resposta => {
             res.status(200).json(resposta);
            })
            .catch(erro => {
                console.error(erro);
                res.status(500).json(erro);
               
            });
              
        }  
module.exports = {
    grafico, 
graficoDois,
graficoTotalL,
graficoTotalD}