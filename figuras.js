//codigo del cuadrado
console.group("Cuadrados");


function perimetroCuadrado(lado){
    return lado *4;
}



function areaCuadrado (lado){
    return lado*lado;
}

 console.groupEnd();
// triangulo
console.group("Triangulos")



function perimetroTriangulo(lado1,lado2,base){

    return lado1+lado2+base;
}


function  areaTriangulos(base, altura){
return (base*altura)/2;
}

console.groupEnd();
//Codigo circulo
console.group("Circulos");

function  diametroCirculo(radio){

    return radio*2;
}



//PI
const PI= Math.PI;
console.log("EL Pi del circulo  es de " +PI );
// circunferencia
function  perimetroCirculo(radio)
{
const diametro =diametroCirculo(radio);
return diametro *PI;

}

// Area
function areaCirculo(radio){

return(radio*radio)*PI;
}

console.groupEnd();
// aqui se interactua con HTML
function calcularPerimetroCuadrado(){
const input=document.getElementById("inputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}
function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
     alert(area);

}
// Interaccion con triangulo

function calcularPerimetroTriangulo(){
    let input =document.getElementById("inputTrianguloLado1");
    let valuelado1 = parseFloat( input.value) ;
    let input2 =document.getElementById("inputTrianguloLado");
    let valuelado2 = parseFloat (input2.value);
    let input3 =document.getElementById("inputTrianguloBase");
    let valuebase = parseFloat(input3.value);
   
    //let input4 =document.getElementById("inputTrianguloAltura");
    //let valueAltura = parseFloat(input4.value);
   
    if(valuelado1 == valuelado2 ){

        if(valuelado1 >0 && valuebase>0){

            let sumaLados= valuelado1+valuelado2;
            if (valuebase<sumaLados){

                let trianguloPerimetro = valuelado1+valuelado2+valuebase;

                //uso pitagoras

let c= valuelado1;
let b= valuebase/2;
let a = Math.sqrt((c*c )-(b*b));
let areaTriangulo = areaTriangulos(valuebase,a);
 alert(`El perímetro del triangulo es: ${trianguloPerimetro}cm  y el área es de ${areaTriangulo}cm^2La altura es de ${a} cm`);
            }
            else{

                alert(" la base es mayor o igual a la suma de los lados no existe altura");
            }

        }
        else{

            alert("Los lados 1 y 2 tienen que ser dle mismo tamaño");
        }
    }




   

   
   
   
   }
   // Circulo
   function calcularDiametro(){

let input = document.getElementById("inputCirculoD");
  let value = input.value;
  
  let diametro = diametroCirculo(value);
  alert(diametro);
   

}
   function calcularPerimetroCirculo()
   {
    let input = document.getElementById("inputCirculoD");
    let value = input.value;
   let  perimetro =perimetroCirculo(value);
    alert (perimetro);
    

   }
   function calcularAreaCirculo()
   {
       let input = document.getElementById("inputCirculoD");
       let value = input.value;
       let area = areaCirculo(value);
               alert(area);

   }
   

