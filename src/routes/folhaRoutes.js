const express = require("express")

const router = express.Router()

const folhacontroller = require("../controller/folhaController")

router.get("/folha", folhacontroller.listarFolha)
router.post("/folha", folhacontroller.criarFolha)

module.exports = router