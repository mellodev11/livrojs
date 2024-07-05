const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e) =>{
e.preventDefault()
    const name = frm.inName.value
const masculino = frm.inMasculino.checked
const altura = Number(frm.inHeight.value)

let peso
if(masculino){
    peso=22*Math.pow(altura, 2)
}else{
    peso=21*Math.pow(altura, 2)
}

resp.innerText= `${name}: Seu peso ideal é ${peso.toFixed(3)}kg`
resp.style.color= "red"
})
frm.addEventListener("reset", ()=>{
    resp.innerText=""
})


//PODERIA SER ASSIM trocar o let 
// const peso = masculino ? 22*Math.pow(altura, 2) : 21 * Math.pow(altura, 2)