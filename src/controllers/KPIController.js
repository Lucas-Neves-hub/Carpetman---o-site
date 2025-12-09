var KPIModel = require("../models/KPIModel");

function KPI(req, res) {
    var fkUsuario = req.params.fkUsuario;
    KPIModel.KPI(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados da KPI 1: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports={KPI}