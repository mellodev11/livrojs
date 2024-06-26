const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) =>{
    const price = Number(frm.inPrice.value)
    const time = Number(frm.inTime.value)

    const total = Math.ceil(time/15) * price

    resp.innerText = `Valor a Pagar R$ ${total.toFixed(2)}`
    e.preventDefault()
})