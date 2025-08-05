// criando variavel amigos
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo.trim() === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(amigo);
    document.getElementById('amigo').value = '';

    atualizarLista();
}
function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
function sortearAmigo(){
    if(amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = 'O amigo secreto é: ' + amigoSorteado;
}