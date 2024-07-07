const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const valor = Number(frm.inNumber.value)

    if(valor % 2 != 0 ){
        
        resp.innerText = `O número: ${valor} é impar`
    }else{
        resp.innerText = `O número: ${valor} é par`
    }
    
})