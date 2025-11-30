var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/grafico/:fkUsuario", function
    (req,res){
        graficoController.grafico(req,res);
    }
)

router.get("/graficoDois/:fkUsuario", function
    (req,res){
        graficoController.graficoDois(req,res);
    }
)


router.get("/graficoTotalL", function
    (req,res){
        graficoController.graficoTotalL(req,res);
    }
)
router.get("/graficoTotalD", function
    (req,res){
        graficoController.graficoTotalD(req,res);
    }
)


module.exports = router;