var express = require("express");
var router = express.Router();

var quizInsController = require("../controllers/quizInsController");



router.post("/:fkUsuario/:positivo/:negativo", function (req, res) {
    quizInsController.quizIns(req, res);
});




module.exports = router;


