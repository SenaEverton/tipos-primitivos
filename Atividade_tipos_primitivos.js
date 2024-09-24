//Exercício 01 - nome e idade

var nome = "Everton Sena"
var idade = 37
console.log("Olá, eu sou  " + nome + ", tenho " + idade + " anos.")

//Exercício 02 nome e cidade

var nome = "Everton Sena"
var cidade = "Paulista"
console.log("Eu sou " + nome + ", resido em " + cidade + ".")

//Exercício 03 - operações básicas

var num1 = 500
var num2 = 1000
var soma = num1 + num2
var subtracao = num2 - num1
var multiplicacao = num1 * num2
var divisao = num2 / num1
console.log ("O resultado da soma é " + soma)
console.log ("O resultado da subtração é " + subtracao)
console.log ("O resultado da multiplicação é " + multiplicacao)
console.log ("O resultado da divisão é " + divisao)

//Exercício 04 - área do triângulo em m²

var base = 4
var altura = 3
var area = (base*altura)/2
console.log ("A área do triângulo é " + area + "m²")

//Exercício 05 - média

var nportugues = 8.5
var nmatematica = 9
var nciencias = 7.5
var media = (nportugues + nmatematica + nciencias)/3
var mediaFormatado = media.toFixed(2)
console.log("A média final é " + mediaFormatado)

//Exercíco 06 - desconto

var vtenis = 1299
var desconto = 0.75
var valorfinal = vtenis * desconto
console.log ("O valor do tênis é R$" + vtenis + " com desconto de 25%, você pagará R$" + valorfinal + ".")

//Exercício 07 - imposto de renda

// Tabela de Alíquota, baseada no rendimento mensal
// Categoria 1 - Até R$ 2112,00: Isento.
// Categoria 2 - R$2112,01 <= Rendimento <= R$2826,65: tributado a 7.5%
// Categoria 3 - R$2826,66 <= Rendimento <= R$3751,05: tributado a 15%
// Categoria 4 - R$3751,06 <= Rendimento <= R$4664,68: tributado a 22.5%
// Categoria 5 - Rendimento > R$4664,68: tributado a 27.5%

var salariobruto = 10000
var desconto2 = (2826.65 - 2112.00) * 0.075
var desconto3 = (3751.05 - 2826.65) * 0.15
var desconto4 = (4664.68 - 3751.05) * 0.225
var desconto5 = (10000 - 4664.68) * 0.275
var valorimposto = desconto2 + desconto3 + desconto4 + desconto5
var valorimpostoFormatado = valorimposto.toFixed(2) 
var salarioliquido = (salariobruto - valorimposto )
var salarioliquidoFormatado = salarioliquido.toFixed(2)
console.log("O valor de imposto retido na fonte mensal é R$" + valorimpostoFormatado)
console.log("O salário líquido mensal é R$" + salarioliquidoFormatado)

//Exercício 08 - conversor de moedas

var dolarcanadense = 100
var taxacambioreais = 4.05
var valorfinalreais = dolarcanadense * taxacambioreais
console.log("O valor de C$" + dolarcanadense + " corresponde a R$" + valorfinalreais + " no câmbio de hoje 24/09/2024.")

//Exercício 09 - conversor Celsius para Fahrenheit

var tcelsius = 100
var tfahrenheit = (tcelsius * (9/5)) + 32
console.log("A temperatura de " + tcelsius + "ºC equivale a " + tfahrenheit + "ºF.")

//Exercício 10 - IMC_Índice de Massa Corporal

var peso = 72
var altura = 1.70
var imc = peso / (altura * altura)
var imcFormatado = imc.toFixed(2)
console.log("O IMC para a altura" + altura + "m e peso " + peso +  "kg é " + imcFormatado)