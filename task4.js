


/*задание 4
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).*/


function countNumberBetween(a, b) {
    a = prompt ('Введите минимальное число');
    b = prompt ('Введите максимальное число');

    timer = setInterval(function() {
      console.log(a);
      if (a<b) {a++;}
      else {clearInterval(timer)}
    }, 1000);
  }

 countNumberBetween();
 

