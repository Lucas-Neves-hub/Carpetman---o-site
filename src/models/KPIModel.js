var database = require("../database/config");

function KPI(fkUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function KPI()");
    var instrucaoSql = `
       SELECT count(opiniao) FROM opiniao join musica on musica.id = opiniao.fkMusica WHERE fkUsuario = '${fkUsuario}' AND  opiniao.opiniao = 'like' AND musica.duracao = 'longa';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { KPI }