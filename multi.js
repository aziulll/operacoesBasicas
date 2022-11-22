function contarNumero() {
 
    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("numberTwo").value;
    var resultado = document.getElementById("resultado");
   
    var soma = Number(numberOne) * Number(numberTwo);

if (numberOne === '' || numberTwo === '') {
    return resultado.innerHTML = `Preencha os campos`
}


    resultado.innerHTML = `o resultado é ${soma}`
    return;
} 
   
