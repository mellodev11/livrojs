const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumber.value)
    const raiz  = Math.sqrt(numero)

    if(Number.isInteger(raiz)){
        resp.innerText = `Raiz: ${raiz}`
    }else{
        resp.innerText = `Não há raiz exata para o ${numero}`
    }
})