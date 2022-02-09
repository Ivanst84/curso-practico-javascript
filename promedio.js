function calcularMediaAritmetica() {
   // primero se capturan los valores que el usuario ingreso en el html
   const datosUsuario= document.getElementById("inputPromedio");
   const datosValue =   datosUsuario.value;
  
   // se recuerda que es un text(string ) se procede hacer la coarcion de la lista
   let arrayValue = Array.from(datosValue.split(","),Number);
 
    const sumaLista = arrayValue.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
   // se optine la media aritmetica
    const promedioLista = sumaLista / arrayValue.length;
  
  //  return promedioLista;
    // se envia a la pagina html para visualizacion de resultados
    const mostrarMedia = document.getElementById("resultadoMedia");
    mostrarMedia.innerText = "La media es de :  " +promedioLista;
  }