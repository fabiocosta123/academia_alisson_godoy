// document.addEventListener("DOMContentLoaded", function () {
//     console.log("HTML carregado e JavaScript pronto!");

//     const navbarToggler = document.querySelector(".navbar-toggler");
//     const navbarCollapse = document.querySelector("#navbarNav");

//     // Verifica se os elementos foram encontrados corretamente
//     if (!navbarToggler || !navbarCollapse) {
//         console.error("Erro: Elementos da navbar não encontrados!");
//         return;
//     }

//     // Aplica o comportamento correto do Bootstrap
//     navbarToggler.addEventListener("click", function () {
//         navbarCollapse.classList.toggle("show");
//         navbarToggler.setAttribute("aria-expanded", navbarCollapse.classList.contains("show"));
//     });

//     // Fecha o menu ao clicar em qualquer link (evita que permaneça aberto no mobile)
//     document.querySelectorAll("#navbarNav .nav-link").forEach(link => {
//         link.addEventListener("click", function () {
//             navbarCollapse.classList.remove("show");
//             navbarToggler.setAttribute("aria-expanded", "false");
//         });
//     });
// });



function limparErros(campos) {
    campos.forEach(campo => {
        const input = document.getElementById(campo);
        const erro = document.getElementById(`erro${campo.charAt(0).toUpperCase() + campo.slice(1)}`);

        if (input) input.classList.remove('is-invalid');
        if (erro) erro.innerText = '';
    });
}

function exibirErro(campo, mensagem) {
    const input = document.getElementById(campo);
    const erro = document.getElementById(`erro${campo.charAt(0).toUpperCase() + campo.slice(1)}`);

    if (input) input.classList.add('is-invalid');
    if (erro) erro.innerText = mensagem;
}

function limparErrosIMC() {
    limparErros(['pesoIMC', 'alturaIMC']);
}

function limparErrosTMB() {
    limparErros(['pesoTMB', 'alturaTMB', 'idadeTMB', 'sexoTMB']);
}

function limparErrosGasto() {
    limparErros(['tmbGasto', 'atividade']);
}

function calcularIMC() {
    limparErrosIMC();

    const peso = parseFloat(document.getElementById('pesoIMC').value);
    const alturaCm = parseFloat(document.getElementById('alturaIMC').value);

    if (isNaN(peso) || peso <= 0) {
        exibirErro('pesoIMC', 'Peso inválido.');
        return;
    }

    if (isNaN(alturaCm) || alturaCm <= 0) {
        exibirErro('alturaIMC', 'Altura inválida.');
        return;
    }

    const alturaM = alturaCm / 100;
    const imc = peso / (alturaM * alturaM);

    let classificacao = "";
    if (imc < 18.5) classificacao = "Baixo peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade Grau I";
    else if (imc < 39.9) classificacao = "Obesidade Grau II";
    else classificacao = "Obesidade Grau III";

    document.getElementById('resultadoIMC').innerText = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

function calcularTMB() {
    limparErrosTMB();

    const peso = parseFloat(document.getElementById('pesoTMB').value);
    const altura = parseFloat(document.getElementById('alturaTMB').value);
    const idade = parseInt(document.getElementById('idadeTMB').value);
    const sexo = document.getElementById('sexoTMB').value;

    if (isNaN(peso) || peso <= 0) {
        exibirErro('pesoTMB', 'Peso inválido.');
        return;
    }
    if (isNaN(altura) || altura <= 0) {
        exibirErro('alturaTMB', 'Altura inválida.');
        return;
    }
    if (isNaN(idade) || idade <= 0) {
        exibirErro('idadeTMB', 'Idade inválida.');
        return;
    }
    if (!sexo) {
        exibirErro('sexoTMB', 'Selecione o sexo.');
        return;
    }

    let tmb;
    if (sexo === "masculino") {
        tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else {
        tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
    }

    document.getElementById('resultadoTMB').innerText = `TMB: ${tmb.toFixed(2)} kcal/dia`;
}

function calcularGasto() {
    limparErrosGasto();

    const tmb = parseFloat(document.getElementById('tmbGasto').value);
    const fator = parseFloat(document.getElementById('atividade').value);

    if (isNaN(tmb) || tmb <= 0) {
        exibirErro('tmbGasto', 'TMB inválida.');
        return;
    }

    if (isNaN(fator) || fator <= 0) {
        exibirErro('atividade', 'Selecione um fator de atividade.');
        return;
    }

    const gastoTotal = tmb * fator;

    document.getElementById('resultadoGasto').innerText = `Gasto: ${gastoTotal.toFixed(2)} kcal/dia`;
}
