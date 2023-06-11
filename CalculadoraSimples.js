//chamada do método input que lê valores e os atribui as variáveis indicadas
const input = require('readline-sync')

let aux
let num1
let num2
do{
    console.log('\n======================================')    
    console.log('         Calculadora Simples          ')
    console.log('======================================')
    console.log('Digite "+" para soma')
    console.log('Digite "-" para subtrair')
    console.log('Digite "*" para multiplicar')
    console.log('Digite "/" para dividir')
    console.log('Digite "sair" para sair\n')
    aux = input.question('Qual das opcoes acima deseja utilizar? ')
    
    switch(aux){
        case '+':
            num1 = Number(input.question('Digite o valor do primeiro valor: '))
            num2 = Number(input.question('Digite o valor do segundo valor: '))
            console.log(`\nResultado: ${num1} + ${num2} = ${(num1 + num2).toFixed(2)}`)
            break
        case '-':
            num1 = Number(input.question('Digite o valor do primeiro valor: '))
            num2 = Number(input.question('Digite o valor do segundo valor: '))
            console.log(`\nResultado: ${num1} - ${num2} = ${(num1 - num2).toFixed(2)}`)
            break
        case '*':
            num1 = Number(input.question('Digite o valor do primeiro valor: '))
            num2 = Number(input.question('Digite o valor do segundo valor: '))
            console.log(`\nResultado: ${num1} * ${num2} = ${(num1 * num2).toFixed(2)}`)
            break
        case '/':
            num1 = Number(input.question('Digite o valor do primeiro valor: '))
            num2 = Number(input.question('Digite o valor do segundo valor: '))
            if(num2 != 0){
                console.log(`\nResultado: ${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`)
                break                
            }
            else{
                console.log('\nO resultado é uma indeterminação\n')
                break
            }
        case 'sair':
            console.log('\nObrigado por usar esse programa!\n')
            break                
    }
}while(aux != 'sair')
