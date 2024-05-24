let brazil = document.querySelector('#brazil')
let resposta = document.querySelector('.resposta')
let converte = document.querySelector('#converte')
let resp = document.querySelector('#resp')


    let date = new Date();
    let horasBr = `${date.getHours()}:${date.getMinutes()}`
    let horasfranca = `${date.getHours() + 5}:${date.getMinutes()}`

converte.addEventListener('click',(event)=>{
    event.preventDefault();
    return resp.innerHTML = `o horario no brasil é:${horasBr} horario da na frança é ${horasfranca}h`

})

