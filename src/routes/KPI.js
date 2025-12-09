var express = require("express");
var router = express.Router();

var KPIController = require("../controllers/KPIController");

router.get("/:fkUsuario", function (req, res) {
    KPIController.KPI(req, res);
});



module.exports= router;