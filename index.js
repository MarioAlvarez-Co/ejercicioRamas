
/* tenemos dos clases de funciones en los arreglos :
-las que modifican el arreglo original
-las que no modifican el arreglo original


*/

//foreach :recorre el array

//array.forEach(
    //    elemento del arreglo  index posicion del arreglo 
    //  (element,index)=>{
        // console.log(`El elemento ${element} esta en la posicion ${index}`);
        //})
        
        let array2=array.map((item)=>{
            return item.toUpperCase();
        })
        
        console.log(array2);


let array=["banana","manzana","pera","piña","uva"];
        // explicacion con arreglos de las funciones array 
     let array3;   
    for(let i=0;i<array.length;i++){

     console.log(array[i]);
     array3.push(array[i].toUpperCase())
}

// ejercicio 


/**
 * Hacer un algoritmo que forme un vector dinámico (del que no se sabe el
número de datos), permita ingresar valores reales, calcule el promedio de los
elementos y forme dos nuevos arreglos, uno con los elementos menores o
iguales al promedio y otro con los superiores. imprima los 2 nuevos arreglos.
/ */



let promedio=0;
let suma=0;
for(let i=0;i<arrayValores.length;i++){
    suma+=arrayValores[i];
}
promedio=suma/arrayValores.length;
console.log(promedio);

let arrayMenores=[];
let arrayMayores=[];

for(let i=0;i<arrayValores.length;i++){
    if(arrayValores[i]<=promedio){
        arrayMenores.push(arrayValores[i]);
    }else{
        arrayMayores.push(arrayValores[i]);
    }
}

console.log(` el Arreglo de los mayores es ${arrayMayores} y el arreglo de los menores es ${arrayMenores}`);
// forma de hacerlo con funciones de los arreglos
let arrayValores=[1,2,3,4,5,6]

let acumulado=arrayValores.reduce((acumulador,elemento)=>{
    return acumulador;
},0)
console.log(acumulado);
 console.log(acumulado/arrayValores.length);

