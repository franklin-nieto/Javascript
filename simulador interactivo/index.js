//calcular el promedio de nota de alumnos ingresada

let x = 1;
let suma = 0;
let promedio = 0;
let n;

n=prompt("ingrese numero de notas que desee" , "");

while(x<=n){

    valor=prompt("Ingrese nota "+ x,"");
    valor=parseInt(valor);
    suma=suma+valor;
    x=x + 1;
}
promedio=(suma)/(x-1)
alert("el promedio de notas es " + promedio);