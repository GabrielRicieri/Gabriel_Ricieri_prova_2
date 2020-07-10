Start();
let table = document.querySelector('#table');
let body = table.childNodes[3]

let list = document.querySelectorAll('input');

list.forEach(input => {

    input.addEventListener("blur", i => {
      
        let string = i.target.value;      
        if(string.indexOf('+') != -1){
            let posicao = string.split("+")
            let i = posicao[0].split("=");
            let a = document.getElementById(i[1]).value;
            let b = document.getElementById(`${posicao[1]}`).value;
            let resultado = parseInt(a) + parseInt(b);
            i.target.value = resultado;
            i.target.innerHtml = resultado
         
        }else if(string.indexOf('-') != -1){
            let posicao = string.split("-")
            let i = posicao[0].split("=");
            let a = document.getElementById(i[1]).value;
            let b = document.getElementById(`${posicao[1]}`).value;
            let resultado = parseInt(a) - parseInt(b);
            i.target.value = resultado;
            i.target.innerHtml = resultado
        }
    })
})