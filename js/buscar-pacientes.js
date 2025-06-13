// importar de um API de pacientes (json)

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            console.log(pacientes);

            //retorno de todos os pacientes
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            }); 
        }
    })

    xhr.send();
});