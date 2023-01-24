
const form = document.getElementById('form');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#result');
const btn = document.querySelector('#btnCalcularSuma');


// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     //console.log({event});
//     event.preventDefault();
//     const suma = (parseInt(input1.value) + parseInt(input2.value));
//     pResult.innerText = "Resultado: " + suma;
// }



btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    const suma = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText = "Resultado: " + suma;
}


