var database = require("../database/config")


function insereCurtida(idMusica, fkUsuario) {
    var instrucao = `
        INSERT INTO opiniao (fkUsuario, fkMusica, opiniao) VALUES ('${fkUsuario}','${idMusica}','like');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function insereDescurtida(idMusica, fkUsuario) {
    var instrucao = `
        INSERT INTO opiniao (fkUsuario, fkMusica, opiniao) VALUES ('${fkUsuario}','${idMusica}','dislike');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function validacao(idMusica, fkUsuario) {
  
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
     SELECT opiniao FROM opiniao WHERE fkMusica = '${idMusica}' AND fkUsuario = '${fkUsuario}' AND (opiniao = 'dislike' or opiniao = 'like');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);}

    function deletar(fkUsuario) {
        console.log("ACESSEI O DELETE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", fkUsuario);
        var instrucaoSql = `
            DELETE FROM opiniao where fkUsuario = '${fkUsuario};
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
    

module.exports = {
   insereCurtida,
   insereDescurtida, 
   validacao,
   deletar
};