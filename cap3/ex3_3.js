const prompt = require("prompt-sync")()
const salario = Number(prompt("Qual salario do funcionário: "))
const anoT = Number(prompt("Anos de trabalho: "))

const quadri = Math.floor(anoT/4)
const aumento = salario * quadri / 100
console.log(`Quadrigênios: ${quadri}`)
console.log(`Salário Final R$: ${(salario+aumento).toFixed(2)}`)