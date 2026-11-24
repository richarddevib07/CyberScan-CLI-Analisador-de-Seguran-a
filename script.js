const readline = require("readline");

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n================================");
console.log("       CYBERSCAN CLI");
console.log("    ANALISADOR DE SENHAS");
console.log("================================\n");

terminal.question("Digite uma senha para analisar: ", (senha) => {

    let pontos = 0;
    let problemas = [];

    if (senha.length >= 8) {
        pontos += 20;
    } else {
        problemas.push("Senha possui menos de 8 caracteres.");
    }

    if (senha.length >= 12) {
        pontos += 20;
    }

    if (/[A-Z]/.test(senha)) {
        pontos += 15;
    } else {
        problemas.push("Adicione letras maiúsculas.");
    }

    if (/[a-z]/.test(senha)) {
        pontos += 15;
    } else {
        problemas.push("Adicione letras minúsculas.");
    }

    if (/[0-9]/.test(senha)) {
        pontos += 15;
    } else {
        problemas.push("Adicione números.");
    }

    if (/[^a-zA-Z0-9]/.test(senha)) {
        pontos += 15;
    } else {
        problemas.push("Adicione caracteres especiais.");
    }

    console.log("\n========== RELATÓRIO ==========");

    console.log(`Pontuação: ${pontos}/100`);

    if (pontos >= 80) {
        console.log("Nível: SENHA FORTE");
    } else if (pontos >= 50) {
        console.log("Nível: SENHA MODERADA");
    } else {
        console.log("Nível: SENHA FRACA");
    }

    console.log("\nProblemas encontrados:");

    if (problemas.length === 0) {
        console.log("Nenhum problema encontrado!");
    } else {
        problemas.forEach((problema, index) => {
            console.log(`${index + 1}. ${problema}`);
        });
    }

    console.log("\n================================");
    console.log("       ANÁLISE CONCLUÍDA");
    console.log("================================\n");

    terminal.close();
});
