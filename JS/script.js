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

    if(op == "suma"){
        var resultado = num1 + num2;
        return resultado;
    }else if(op == "resta"){
        var resultado = num1 - num2;
        return resultado;
    }else if(op == "multip"){
        var resultado = num1 * num2;
        return resultado;
    }else{
        var resultado = num1 / num2;
        return resultado;
    }

}