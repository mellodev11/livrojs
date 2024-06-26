const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const medication = frm.inMedication.value
    const price = Number(frm.inPrice.value)

    const promo = Math.floor(price) * 2 

    resp1.innerText = `Promoção de ${medication}`
    resp2.innerText = `Leve 2 por apenas R$ ${promo.toFixed(2)}`
    e.preventDefault()
})