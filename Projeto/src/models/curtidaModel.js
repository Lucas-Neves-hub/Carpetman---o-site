var database = require("../database/config")


function insereCurtida(curtida, idMusica, fkUsuario) {
    var instrucao = `
        INSERT INTO opiniao (fkUsuario, fkMusica, curtida) VALUES ('${fkUsuario}','${idMusica}','${curtida}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function insereDescurtida(descurtida, idMusica, fkUsuario) {
    var instrucao = `
        INSERT INTO opiniao (fkUsuario, fkMusica, descurtida) VALUES ('${fkUsuario}','${idMusica}','${descurtida}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
   insereCurtida,
   insereDescurtida
};