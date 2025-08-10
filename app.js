// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo == null || amigo.trim() === "") {
        alert("Ingresa el nombre de un amigo valido.");
        return;
    }

    amigos.push(amigo);

    imprimirAmigos();
}

function imprimirAmigos() {
    let listar = document.getElementById('listaAmigos')

    listar.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
        listar.innerHTML += "<li>" + element + "</li>";
    }

    document.getElementById('amigo').value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer un sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado'); 
    resultado.innerHTML = "El amigo seleccionado es: " + amigoSeleccionado;
}