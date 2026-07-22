const Folha = require("../models/Folha")
const folhaService = require("../services/folhaService")

exports.criarFolha = async(req,res) =>{

    try {

        const {funcionarioId, salarioBruto} = req.body

        const calculo = folhaService.calcularFolha(salarioBruto)

        const folha = await Folha.create({
            funcionarioId,
            salarioBruto,
            inss: calculo.inss,
            fgts: calculo.fgts,
            salarioLiquido: calculo.salarioLiquido
        })

        res.status(201).json(folha)


    } catch (error) {
        console.log(error)
    }
}

exports.listarFolha = async(req,res)=>{

    try {

        const folhas = await Folha.findAll()

        res.status(201).json(folhas)
        
    } catch (error) {
        res.status(500).json({"Message":error})
        console.log(error)
    }

}