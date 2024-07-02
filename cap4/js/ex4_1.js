const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    const name = frm.inName.value
    const note1 = Number(frm.inNote1.value)
    const note2 = Number(frm.inNote2.value)

    const media = (note1+note2)/2
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    if(media >=7){
        resp2.innerText= `Parabénns ${name}! Você foi aprovado(a)`
        resp2.style.color = "green"
    }else if (media >=4) {
         resp2.innerText= `Atênção ${name}. Você está em exame`
        resp2.style.color = "blue"
        
    }
    else{
        resp2.innerText= `Ops ${name}! Você foi reprovado(a)`
        resp2.style.color = "red"
    }
    e.preventDefault()

})