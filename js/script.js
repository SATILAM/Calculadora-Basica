// Obtenha todos os botões
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnAdicao = document.getElementById("btnAdicao");
const btnSubtracao = document.getElementById("btnSubtracao");
const btnMultiplicacao = document.getElementById("btnMultiplicacao");
const btnDivisao = document.getElementById("btnDivisao");
const btnPonto = document.getElementById("btnPonto");
const btnIgual = document.getElementById("btnIgual");
const btnLimpar = document.getElementById("btnLimpar");
const btnApagar = document.getElementById("btnApagar");
const btnPorcentagem = document.getElementById("btnPorcentagem");

// Obtenha o visor
const visor = document.getElementById("resultado");

// Crie variáveis ​​para armazenar os valores
let valor1 = "";
let valor2 = "";
let operacao = "";

// Função para adicionar números ao visor
function adicionarNumero(numero) {
    visor.value += numero;
}

// Função para limpar o visor
function limparVisor() {
    visor.value = "";
    valor1 = "";
    valor2 = "";
    operacao = "";
}

// Função para apagar o último caractere do visor
function apagar() {
    visor.value = visor.value.slice(0, -1);
}

// Função para calcular o resultado
function calcular() {
    valor2 = visor.value;
    let resultado = 0;
    switch (operacao) {
        case "+":
            resultado = parseFloat(valor1) + parseFloat(valor2);
            break;
        case "-":
            resultado = parseFloat(valor1) - parseFloat(valor2);
            break;
        case "*":
            resultado = parseFloat(valor1) * parseFloat(valor2);
            break;
        case "/":
            resultado = parseFloat(valor1) / parseFloat(valor2);
            break;
        case "%":
            resultado = parseFloat(valor1) % parseFloat(valor2);
            break;
    }
    visor.value = resultado;
    valor1 = resultado;
    valor2 = "";
    operacao = "";
}

// Adicione eventos de clique para cada botão
btn0.addEventListener("click", function() {
    adicionarNumero("0");
});
btn1.addEventListener("click", function() {
    adicionarNumero("1");
});
btn2.addEventListener("click", function() {
    adicionarNumero("2");
});
btn3.addEventListener("click", function() {
    adicionarNumero("3");
});
btn4.addEventListener("click", function() {
    adicionarNumero("4");
});
btn5.addEventListener("click", function() {
    adicionarNumero("5");
});
btn6.addEventListener("click", function() {
    adicionarNumero("6");
});
btn7.addEventListener("click", function() {
    adicionarNumero("7");
});
btn8.addEventListener("click", function() {
    adicionarNumero("8");
    });
    btn9.addEventListener("click", function() {
    adicionarNumero("9");
    });
    btnAdicao.addEventListener("click", function() {
    valor1 = visor.value;
    operacao = "+";
    visor.value = "";
    });
    btnSubtracao.addEventListener("click", function() {
    valor1 = visor.value;
    operacao = "-";
    visor.value = "";
    });
    btnMultiplicacao.addEventListener("click", function() {
    valor1 = visor.value;
    operacao = "*";
    visor.value = "";
    });
    btnDivisao.addEventListener("click", function() {
    valor1 = visor.value;
    operacao = "/";
    visor.value = "";
    });
    btnPonto.addEventListener("click", function() {
    adicionarNumero(".");
    });
    btnIgual.addEventListener("click", function() {
    calcular();
    });
    btnLimpar.addEventListener("click", function() {
    limparVisor();
    });
    btnApagar.addEventListener("click", function() {
    apagar();
    });
    btnPorcentagem.addEventListener("click", function() {
    valor1 = visor.value;
    operacao = "%";
    visor.value = "";
    });