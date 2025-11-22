var database = require("../database/config")


function grafico(fkUsuario) {
  
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
     SELECT cont(opiniao) FROM opiniao WHERE fkUsuario = '${fkUsuario}' AND  opiniao = 'like';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);}



    module.exports = {
        grafico
    }