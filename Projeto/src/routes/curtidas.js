var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/insereCurtida", function
    (req,res){
        curtidaController.insereCurtida(req,res);
    }
)




router.post("/insereDescurtida", function
    (req,res){
        curtidaController.insereDescurtida(req,res);
    }
)

router.delete("/deletar", function
    (req,res){
        curtidaController.deletar(req,res);
    }
)

router.get("/validacao", function (req, res) {
    curtidaController.validacao(req, res);
});

module.exports = router;

