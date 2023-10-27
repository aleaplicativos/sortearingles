var valorMaximo = 5000;
var novoNumero = document.getElementById('novoNumero');
var time = document.querySelector('.time');
var sortearNovo = document.getElementById('sortearNovo');

function criarUnico(inicio, fim, sorteados) {
    var sugestao;

    do {
        sugestao = Math.ceil(Math.random() * valorMaximo);
    } while (sugestao < inicio || sugestao > fim || sorteados.includes(sugestao));

    return sugestao;
}

sortearNovo.addEventListener('click', function () {
    var inicio = parseInt(document.getElementById('inicio').value) || 1;
    var fim = parseInt(document.getElementById('fim').value) || valorMaximo;

    if (inicio > fim) {
        alert("O valor inicial deve ser menor ou igual ao valor final.");
        return;
    }

    if (fim > valorMaximo) {
        alert("O valor final deve ser menor ou igual a " + valorMaximo);
        return;
    }

    novoNumero.innerHTML = "";
    time.style.display = "block";
    novoNumero.className = "vencedor animando";

    setTimeout(function () {
        novoNumero.className = "vencedor";
        time.style.display = "none";
    }, 3000);

    var sorteados = [];
    var intervalo = 100;
    var contador = 0;
    var intervaloID = setInterval(function () {
        novoNumero.innerHTML = criarUnico(inicio, fim, sorteados);
        contador += intervalo;
        if (contador >= 3000) {
            clearInterval(intervaloID);
        }
    }, intervalo);
});
