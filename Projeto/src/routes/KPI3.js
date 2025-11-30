var express = require("express");
var router = express.Router();

var KPI3Controller = require("../controllers/KPI3Controller");


router.get("/:fkUsuario", function (req, res) {
    KPI3Controller.KPI3(req, res);
});

module.exports= router;