
/*задание 1 
   Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
   На этот раз оформите решение в виде функции. */ 


function checkEvenElements(object) {
    let zero = 0;
    let odd = 0;
    let even = 0;

    for(let i = 0; i < object.length; i++) { 
    
        if (Number.isFinite(object[i]))  {
            if (object[i]===0) {    
                zero++;
            } else if (object[i]%2 == 0 ) {
                even++;
            } else {
                odd++; 
            }
        }
    }

    let strZero = (zero==1 ? `${zero} нулевой` : `${zero} нулевых`)
    let strEven = (even==1 ? `${even} чётный` : `${even} чётных`)
    let strOdd = (odd==1 ? `${odd} нечётный` : `${odd} нечётных`)
    
    console.log(`В массиве ${strZero}, ${strEven} и ${strOdd} элементов`);
} 

checkEvenElements([7, 5, 3, 2, 4, 0, '0', 'слово', NaN, Infinity]);

