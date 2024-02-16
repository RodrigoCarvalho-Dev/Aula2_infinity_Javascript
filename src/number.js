let number = Number(prompt("Select your number:"));

if (number%2 == 0 && number > 0){
    console.log("par e positivo")
}else if(number%2 != 0 && number > 0){
    console.log("impar e positivo")
}else if(number%2 == 0 && number < 0){
    console.log("par e negativo")
}else if(number%2 != 0 && number < 0){
    console.log("impar e negativo")
}else{
    console.log("número inválido")
}




let weight = Number(prompt("Digite seu peso em kg:"));
let height = Number(prompt("Digite sua altura em metros:"));

if (weight > 300 || height > 2.4){
    console.log("numero inválido")
}

number = (weight / (height * height))
console.log(number.toFixed(1))




if (number < 18.5){
    console.log("abaixo do peso")
}else if (number > 18.5 && number < 24.9){
    console.log("peso ideal")
}else if (number > 24.9 && number < 29.9){
    console.log("sobrepeso")
}else if (number > 29.9 && number < 34.9){
    console.log("obesidade grau 1")
}else if (number > 34.9 && number < 39.9){
    console.log("obesidade grau 2")
}else if (number > 39.9){
    console.log("obesidade grau 3")
}else{
    console.log("numero inválido")
}
