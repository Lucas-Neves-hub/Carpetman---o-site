var database = require("../database/config")


function insereCurtida(curtida, idMusica, fkUsuario) {
    var instrucao = `
        INSERT INTO opiniao (fkUsuario, fkMusica, opiniao) VALUES ('${fkUsuario}','${idMusica}','${curtida}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function insereDescurtida(descurtida, idMusica, fkUsuario) {
    var instrucao = `
        INSERT INTO opiniao (fkUsuario, fkMusica, opiniao) VALUES ('${fkUsuario}','${idMusica}','${descurtida}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function validacao(idMusica, fkUsuario) {
  
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
     SELECT opiniao FROM opiniao where fkMusica = '${idMusica}' AND fkUsuario = '${fkUsuario}' AND opiniao = 'dislike';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);}

module.exports = {
   insereCurtida,
   insereDescurtida, 
   validacao
};