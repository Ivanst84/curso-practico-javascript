//Crear una lista solo con los salarios
soloSalarios = colombia.map(
    function(persona){
        return persona.salary;
    }
);
//Crear lista con salarios ordenador de forma ascendente
const salariosColSorted = soloSalarios.sort((a,b) => a-b)

//Calcular la mediana
function calcMediana(list){
    const esPar = (list.length % 2 === 0);
    if (esPar){
        const mitad1 = Math.trunc(list.length/2);
        const mitad2 = mitad1 - 1;
        return (list[mitad1] + list[mitad2])/2
    }else{
        const mitad = list.length/2;
        return list[mitad];
    }

}
const medianaGeneralCol= calcMediana(salariosColSorted);
//mediana de top 10
const splaceStart = (salariosColSorted.length *90)/100;
const splaceCount = salariosColSorted.length  -splaceStart;
const salariosColTop10 = salariosColSorted.splice(
    splaceStart,
    splaceCount,
);
const medianaTop10col= calcMediana(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10col,
});