let form = document.querySelector('form')
let name = document.querySelector('#name')
let Sexmasc = document.querySelector('#sexMasc')
let SexFem = document.querySelector('#sexFem')
let altura = document.querySelector('#altura')
let calcular = document.querySelector('#calcular')
let clean = document.querySelector('#clean')


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    function verificarSexo(){
        if(Sexmasc.value === 'on'){
           let alturaNum =Number(altura.value);
           parseFloat(alturaNum)
           let quadradoNum = Math.pow(alturaNum, 2);
           let calculoPeso = 22 * quadradoNum;

           console.log(calculoPeso)
        } if(SexFem === 'on'){
            let alturaNumFem =Number(altura.value);
            parseFloat(alturaNumFem);
            let quadradoNumFem = Math.pow(alturaNumFem, 2);
            let calculoPesoFem = 21 * quadradoNumFem
            console.log(calculoPesoFem)
        }
    }
    return verificarSexo()

    
})