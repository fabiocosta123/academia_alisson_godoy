function limparErrosIMC() {
    document.getElementById('pesoIMC').classList.remove('is-invalid');
    document.getElementById('alturaIMC').classList.remove('is-invalid');
    document.getElementById('erroPesoIMC').innerText = '';
    document.getElementById('erroAlturaIMC').innerText = '';
}

function limparErrosTMB() {
    document.getElementById('pesoTMB').classList.remove('is-invalid');
    document.getElementById('alturaTMB').classList.remove('is-invalid');
    document.getElementById('idadeTMB').classList.remove('is-invalid'); 
    document.getElementById('sexoTMB').classList.remove('is-invalid');
    document.getElementById('erroPesoTMB').innerText = '';  
    document.getElementById('erroAlturaTMB').innerText = '';
    document.getElementById('erroIdadeTMB').innerText = '';
    document.getElementById('erroSexoTMB').innerText = '';
}

function limparErrosGasto() {
    document.getElementById('tmbGasto').classList.remove('is-invalid');
    document.getElementById('atividade').classList.remove('is-invalid');
    document.getElementById('erroTMBGasto').innerText = '';
    document.getElementById('erroAtividadeGasto').innerText = '';
}


function calcularIMC() {
    limparErrosIMC();

    const peso = parseFloat(document.getElementById('pesoIMC').value);
    const alturaCm = parseFloat(document.getElementById('alturaIMC').value);

    if (isNaN(peso) || peso <= 0 || isNaN(alturaCm) || alturaCm <= 0) {
        alert("Preencha corretamente Peso e Altura para calcular o IMC.");
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

    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0 || isNaN(idade) || idade <= 0) {
        alert("Preencha corretamente Peso, Altura e Idade para calcular o TMB.");
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
        alert("Informe corretamente a TMB para calcular o Gasto Calórico.");
        return;
    }

    const gastoTotal = tmb * fator;

    document.getElementById('resultadoGasto').innerText = `Gasto: ${gastoTotal.toFixed(2)} kcal/dia`;
}
