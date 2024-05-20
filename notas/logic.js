const nome = document.querySelector('.nome').value
let n1 = document.querySelector('.nota1')
let n2 = document.querySelector('.nota2')
const form = document.querySelector('form')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let nota1 = Number(n1.value)
    let nota2 = Number(n1.value)
    let resultado = document.querySelector('.resultado')
    
    media = (nota1 + nota2) / 2 
    if(nota1 === '' || nota1 === null){
        alert(`insira a nota no campo ${n1,n2}`)
    }
    if(media >= 5){
        resultado.innerText = `o aluno ${nome} está aprovado com a média de ${media}`
    }else{
        resultado.innerText=`o aluno ${nome} está reprovado`
    }
    
}) 
 


