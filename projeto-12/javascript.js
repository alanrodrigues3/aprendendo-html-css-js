// Valor de desconto que não muda
const desconto = 100;

// Pega as variáveis necessárias
let nome = prompt("digite seu nome: ");
let sobrenome = prompt("digite seu sobrenome: ");
let idade = prompt("digite sua idade: ");
let dataNascimento = prompt("digite sua data de nascimento: ");
let salarioBruto = prompt("Digite seu salário bruto: ");

// Calcula o salário líquido
let salarioLiquido = salarioBruto - desconto;

console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(dataNascimento);
console.log("Seu salário bruto é: ", salarioBruto);
console.log("Seu salário líquido é: ", salarioLiquido);
