let resultado = document.getElementById("resultado");

function adicionarNumero(num) {
    resultado.value += num;
}

function adicionarOperacao(operacao) {
    resultado.value += operacao;
}

function limpar() {
    resultado.value = "";
}

function apagar() {
    resultado.value = resultado.value.slice(0, -1);
}

function calcular() {
    try {
        resultado.value = eval(resultado.value);
    } catch (error) {
        resultado.value = "Erro";
    }
}
