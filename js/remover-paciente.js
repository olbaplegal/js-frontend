var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 1000);


    console.log("clicando para remover...");
});