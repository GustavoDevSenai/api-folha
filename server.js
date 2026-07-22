require("dotenv").config()
const app = require("./app")
const sequelize = require("./src/config/database")

const PORT = 3003
//sincroniza tabelas automaticamente
sequelize.sync()

app.listen(PORT,()=>{
    console.log(`Servidor iniciado na porta ${PORT}`)
})