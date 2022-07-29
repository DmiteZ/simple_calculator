// CONTENEDOR DE RESULTADO
const result = document.getElementById("result");

// OPERACIONES(inputs)
const option = document.getElementById("operacion")
const number1 = document.getElementById("numero1");
const number2 = document.getElementById("numero2");

// CONTENEDORES DE BOTONES
const buttonResult = document.getElementById("button_result");
const buttonClean = document.getElementById("button_clean");

// FUNCIONES DE LAS OPERACIONES A REALIZAR
const suma = (num1, num2) => {
  return (num1) + (num2);
}
const resta = (num1, num2) => {
  return (num1) - (num2);
}
const multiplicacion = (num1, num2) => {
  return (num1) * (num2);
}
const division = (num1, num2) => {
  return (num1) / (num2);
}
const clean = () => {
  option.value = "";
  number1.value = "";
  number2.value = "";
  result.innerHTML = "Resultado";
}

buttonResult.addEventListener("click", (element)=>{
  if(option.value > 0 && option.value < 5){
    let digito1 = parseFloat(number1.value);
    let digito2 = parseFloat(number2.value);

    if (option.value == 1 && !digito1 == "" && !digito2 == "") {
      result.innerHTML= (`El resultado de la suma es ${suma(digito1, digito2)}`);
    }
    else if (option.value == 2 && !digito1 == "" && !digito2 == ""){
      result.innerHTML = (`El resultado de la resta es ${resta(digito1, digito2)}`);
    }
    else if (option.value == 3 && !digito1 == "" && !digito2 == ""){
      result.innerHTML = (`El resultado de la multiplicación es ${multiplicacion(digito1, digito2)}`);
    }
    else if(option.value == 4 && !digito1 == "" && !digito2 == ""){
      result.innerHTML = (`El resultado de la división es ${division(digito1, digito2)}`);
    }
    else{
      alert("Rellene todos los campos correctamente");
      clean();
    }
  }
  else if(option.value < 0 || option.value > 5){
    alert("No se encontró la opción elegida, vuelva a intentarlo");
    clean();
  }
  else{
    alert("Rellene todos los campos correctamente");
    clean();
  }
  element.preventDefault();
})

buttonClean.addEventListener("click", ()=>{
  clean();
})