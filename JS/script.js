var num1 = 1;
var num2 = 2;

/**
 * 
 * @param {*} number1 
 * @param {*} number2 
 */
function sumar(number1,number2){
    var resultado = number1 + number2;
    return resultado;
}

/**
 * 
 * @param {int} num1 
 * @param {int} num2 
 * @param {string} op 
 * @returns int
 * Esta funcion calcula una operacion basica matematica (suma, resta, multiplicacion, division) entre dos numeros
 */
function calcular(num1, num2, op){
    var resultado;

    if(op == "suma"){
        resultado = num1 + num2;
    }else if(op == "resta"){
        resultado = num1 - num2;
    }else if(op == "multip"){
        resultado = num1 * num2;
    }else{
        resultado = num1 / num2;
    }
    return resultado;
}