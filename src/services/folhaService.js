exports.calcularFolha = (salarioBruto) => {
    const inss = salarioBruto * 0.08
    const fgts = salarioBruto * 0.08
    const salarioLiquido = salarioBruto - inss

    return{
        inss,
        fgts,
        salarioLiquido
    }

}