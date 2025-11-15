var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");
var descurtidaController = require("../controllers/curtidaController");

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

module.exports = router;

