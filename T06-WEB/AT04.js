function operacoes(num1, num2) {
    var calculos = "Soma = " + (num1 + num2) + " \n" +
        "Sub = " + (num1 - num2) + " \n" +
        "Mult = " + (num1 + num2) + " \n" +
        "Div = " + (num1 / num2) + " \n" +
        "Resto da Div = " + (num1 % num2)

    return calculos
}
console.log(operacoes(20, 3))