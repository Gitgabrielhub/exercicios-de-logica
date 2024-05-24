let valor = document.querySelector('#numero');
let frm = document.querySelector('#form')
let saida = document.querySelector('#resposta')
let saida2 = document.querySelector('#resposta2')

frm.addEventListener('submit',(event)=>{
    event.preventDefault();

    let numero = Number(valor.value)
    let raizQuadrada = Math.sqrt(numero)

    if(numero % 2 === 0  ){
        return saida2.innerText = `o ${numero} é par e sua raiz é ${raizQuadrada}`
    }else if(numero % 2 === 1){
        return saida.innerText = `o  ${numero} é impar e sua raiz quadrada é: ${raizQuadrada}`
    }
    
})