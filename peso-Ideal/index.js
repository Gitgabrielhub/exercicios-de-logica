let form = document.querySelector('form')
let name = document.querySelector('#name').value
let Sexmasc = document.querySelector('#sexMasc').value
let SexFem = document.querySelector('#sexFem').value
let altura = document.querySelector('#altura')
let calcular = document.querySelector('#calcular')
let clean = document.querySelector('#clean')
let resposta = document.querySelector('.resposta')



calcular.addEventListener("click",(event)=>{
    event.preventDefault();

    //verificar campos nao preenchidos 
   
    if((name === "" || Sexmasc === "") || altura === ''){
        alert("preencha os campos")
    }

    let alturaNumber = Number(Math.pow(altura.value, 2))
    alturaNumber.toFixed(2)

    if(SexFem === 'on' && Sexmasc === ''){
        let calculoFem = 21 * alturaNumber;
        resposta.innerText = `o peso ideal da ${name} é de: ${calculoFem}`;
        resposta.style.color = 'red';
    }else{
        let calculoMasc = 22 * alturaNumber;
        resposta.innerText = `o peso ideal do ${name} é de: ${calculoMasc}`;
        resposta.style.color = 'green';
    }
}) 
form.addEventListener('reset',()=>{
    
    resposta.innerHTML=''
})



