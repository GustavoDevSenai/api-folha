const Folha = require("../models/Folha")


exports.criarFolha = async(req,res) =>{

    try {
        const folha = await Folha.create(req.body)

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