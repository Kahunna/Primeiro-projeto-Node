function salarioTotal() {
    var nome = document.getElementById("nome").value,
        idade = parseInt(document.getElementById("idade").value),
        cargo = document.getElementById("cargo").value,
        salario = parseFloat(document.getElementById("salario").value);

    var reajuste = 0.38 * salario;
    var gratificacao = 0.20 * salario;
    var salarioBruto = reajuste + gratificacao + salario;
    var salarioLiquido = salarioBruto - (0.15 * salarioBruto);

    var solucao = "<hr><p> nome: " + nome + "</p>" +
        "<p> idade: " + idade + "</p>" +
        "<p> cargo: " + cargo + "</p>" +
        "<p> salario: " + salario + "</p>" +
        "<p> Salário bruto: " + salarioBruto + "</p>" +
        "<p> Salário liquido: " + salarioLiquido + "</p>";

    document.getElementById("resultado").innerHTML = solucao;
}


function somarValores() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = parseInt(s1) + parseInt(s2);

    var soma = "<hr><p> Soma: " + s3 + "</p>";
    document.getElementById("somaprint").innerHTML = soma;
}