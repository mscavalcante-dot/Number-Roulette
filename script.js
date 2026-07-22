/*
1 - Gerar um número aleatório entre 1 a 100 e armazená-lo em uma variável.
2 - Definir o número máximo de tentativas.
    2.1 - Iniciar o contador de tentativas.
3 - Capturar o valor inserido do input.
    3.1 - Validar se é um número válido entre 1 e 100.
    3.2 - Comparar o palpite com o número gerado pela máquina e exibir uma mensagem.
        3.2.1 - "Você acertou!" (o jogo termina)
        3.2.2 - "O número secreto é maior" ou "o número secreto é menor" (e o jogo continua)
4 - Decrementar o número de tentativas.
5 - Exibir o número de tentativas restantes.
    5.1 - Caso o jogador atingir o número máximo de tentativas, o jogo encerra com "Você perdeu! o número era X".
*/


//Botões
const btnDica = document.getElementById("dica");
const btnChutar = document.getElementById("chute");


//tentativas
const tentativas = 5
document.getElementById("tentativas").textContent = "Você tem " + tentativas + " tentativas restantes.";


//Número aleatório
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log(numeroSecreto);

//Salvar input e comparar
const palpite = parseInt(document.getElementById("palpite").value);
if (palpite <= 100) {
palpite === numeroSecreto ? alert("Uau!") : alert("poxa, o numero não era esse.")
};
