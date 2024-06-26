const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const product = frm.inProduct.value
    const price = Number(frm.inPrice.value)

    const desc = price / 2
    const promo = (price * 2) + desc
    
    resp1.innerText = `${product} - Promoção: leve 3 por R$: ${promo.toFixed(2)}`
    resp2.innerText = `O terceiro produto custa apenas R$: ${desc.toFixed(2)}`
    e.preventDefault()
} )