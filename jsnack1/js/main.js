const firstNumber = Number(prompt("Enter first number"))
const secondNumber = Number(prompt("Enters second number"))

console.log(firstNumber,secondNumber)

if(firstNumber > secondNumber){
    alert(firstNumber)
} else if(secondNumber > firstNumber){
    alert(secondNumber)
} else{
    alert('i numeri sono uguali')
}