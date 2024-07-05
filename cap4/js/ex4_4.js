const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit",(e) =>{
    e.preventDefault()
    const hour = Number(frm.inHour.value)
    let fuso = hour + 5

    if(fuso>24){
        fuso= fuso-24
    }
    resp.innerText= `Hora na França: ${fuso.toFixed(2)}`
    resp.style.backgroundColor = "green"
})