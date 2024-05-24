let brazil = document.querySelector('#brazil')
let resposta = document.querySelector('.resposta')
let converte = document.querySelector('#converte')
let resp = document.querySelector('#resp')


let date = new Date();
let horasBr = `${date.getHours()}:${date.getMinutes()}`
let horasfranca = `${date.getHours() + 5}:${date.getMinutes()}`

console.log(horasBr)

converte.addEventListener('click',(event)=>{
    event.preventDefault();
    
    let brasa = Number(brazil.value) + 5;
    
    
    return resp.innerHTML = `o horario no brasil é:${horasBr} horario da na frança é ${horasfranca}h`

    
    
   

})

