const prompt = require("prompt-sync")()
const racaoKg = Number(prompt("Kilos de ração:"))
const consumo = Number(prompt("Consumo diario(gr):"))

const pesoGr = racaoKg * 1000
const duration = Math.floor(pesoGr/consumo)
const rest = pesoGr % consumo


console.log(`Duração: ${duration} dias`)
console.log(`Sobra: ${rest} gr`) 