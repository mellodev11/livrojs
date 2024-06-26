const frm =   document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener("submit", (e)=>{
    const titulo = frm.inTitle.value
    const duracao =Number(frm.inDuracao.value)
    const hour = Math.floor(duracao / 60)
    const minutos = duracao % 60
    resp1.innerText = titulo
    resp2.innerText = `${hour} horas(s) e ${minutos} minutos`
    e.preventDefault()

})