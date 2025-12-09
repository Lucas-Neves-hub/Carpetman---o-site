var express = require("express");
var router = express.Router();

var KPI2Controller = require("../controllers/KPI2Controller");

router.get("/:fkUsuario", function (req, res) {
    KPI2Controller.KPI2(req, res);
});



module.exports= router;