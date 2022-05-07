import "./styles.css";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnCalcular = document.getElementById("calcular");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese la base:";
rotulo2.innerHTML = "Ingrese el exponente:";

let calcularPotencia = (base: number, exponente: number): number => {
  let resultado: number = 1;
  let i: number;
  if (exponente === 0) {
    return 1;
  } else {
    for (i = 1; i <= exponente; i++) {
      resultado = resultado * base;
    }
    return resultado;
  }
};
btnCalcular.addEventListener("click", () => {
  let total: number = calcularPotencia(
    Number(dato1.value),
    Number(dato2.value)
  );

  console.log("La potencia es =  " + total);
});
