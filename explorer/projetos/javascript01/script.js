/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let firstNumber = prompt("Por favor, insira um número:")
let secondNumber = prompt("Agora, insira um segundo número:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

alert("A soma dos dois é: " + (firstNumber + secondNumber))
alert("A subtração dos dois é: " + (firstNumber - secondNumber))
alert("A multiplicação dos dois é: " + (firstNumber * secondNumber))
alert("A divisão dos dois é: " + (firstNumber / secondNumber))
alert("E o resto da divisão é: " + (firstNumber % secondNumber))

let oddOrEven = firstNumber + secondNumber

if(oddOrEven % 2 == 0) {
    alert("A soma dos dois números é par.")
}

else{
    alert("A soma dos dois números é ímpar.")
}

if(firstNumber == secondNumber) {
    alert("Os dois número inseridos são iguais.")
}

else{
    alert("Os dois números inseridos são diferentes.")
}