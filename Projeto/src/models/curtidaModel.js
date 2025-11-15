var database = require("../database/config")


function insereCurtida(curtida) {
    var instrucao = `
        INSERT INTO opinioes (curtida) VALUES ('${curtida}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function insereDescurtida(descurtida) {
    var instrucao = `
        INSERT INTO opinioes (descurtida) VALUES ('${descurtida}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
   insereCurtida,
   insereDescurtida
};