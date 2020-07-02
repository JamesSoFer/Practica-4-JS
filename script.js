//
//Practica 4
//

let fin= false;
let array= [];

while(!fin){
    let num= prompt('Escriba un numero:');

    if (!isNaN(parseInt(num))){
        array.push(num);
    }else{
        if(num==""){
            fin=true;
            console.log(array);

            let suma=array.reduce((previous, current)=>current+=previous);
            let promedio=suma/array.length;
            console.log('Promedio:',promedio);

            array.sort((a,b)=>a-b);

            let num_menor= Math.min.apply(null,array);
            console.log('Número menor: ',num_menor);

            let num_mayor= Math.max.apply(null,array);
            console.log('Número mayor:',num_mayor);

            let mediana1= Math.floor((array.length-1)/2);
            let mediana2= Math.ceil((array.length-1)/2);
            let mediana= (array[mediana1]+array[mediana2])/2;
            console.log('Mediana:',mediana);
        }
    }
} 