
var btn = document.getElementsByClassName('botao-alterar')
var input = document.getElementById('asdf')
// var remove = document.getElementsByClassName("div-radio");
console.log(btn);

btn[0].addEventListener('click', function() {
    event.preventDefault();
    document.getElementsByName("name-user")[0].removeAttribute("disabled")
    document.getElementsByName("phone")[0].removeAttribute("disabled")
    Botao()
    
})


//     document.getElementsByClassName("div-radio")[0].removeChild("input-gm");

function Botao()
{
    var elemento = document.getElementsByClassName("div-alterar");
    elemento[0].innerHTML = "<button class='botao-alterar'>Salvar</button>"
}


// function RemoverInput(){


//     var remover = document.getElementsByClassName("div-radio")
//     var child = document.getElementsByClassName("input-gm");
    
//     element.removeChild(child);
    
//     }
//     window.onload = function() {
//         RemoverInput();
//     };
