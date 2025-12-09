var KPI2Model = require("../models/KPI2Model");


function KPI2(req, res) {
    var fkUsuario = req.params.fkUsuario;
    KPI2Model.KPI2(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados da KPI 3: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports={KPI2}