// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.


function getMaxSubSum(arr) {
    let currSum = 0;

    for (let len = arr.length - 1; len >= 1; len--) {
        for(let i = 0; i < arr.length - len; i++) {
            let newArr = arr.slice(i, i + len);
            let sum = newArr.reduce((acc, curr) => acc += curr);
            if (sum > currSum) currSum = sum
        }
    }

    return currSum;
}



// Сумма свойств объекта

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью 
// метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
    return Object
        .values(salaries)
        .reduce((acc, curr) => acc + curr, 0);
}


// Подсчёт количества свойств объекта

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

function count(obj) {
    return Object.keys(obj).length;
}



// Максимальная зарплата

// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
    let maxSalary = null;
    let worker = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            worker = name;
        }
    }

    return worker;
}


// Вычислить сумму чисел до данного

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:
// - С использованием цикла.
// - Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// - С использованием формулы арифметической прогрессии.

// Пример работы вашей функции:
// function sumTo(n) { /*... ваш код ... */ }
// alert( sumTo(100) ); // 5050

function sumTo(n) {
    // // option 1
    // let sum = 0;
    // for(; n > 0; n--) {
    //     sum += n;
    // }
    // return sum;

    // option 2
    if (n == 1) {
        return 1
    } else {
        return n + sumTo(n-1)
    }

    // // option 3
    // return ((1 + n) / 2) * n;
}


// Вычислить факториал

// Факториал натурального числа – это число, умноженное на "себя минус один", затем 
// на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:
// n! = n * (n - 1) * (n - 2) * ...*1

// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// Числа Фибоначчи

// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, 
// следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:
// function fib(n) { /* ваш код */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

function fib(n) {
    let arr = [1, 1];
    
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n-1];
}


// Сумма с помощью замыканий

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {
    return function(b) {
        return a + b;
    }
}


// Фильтрация с помощью функции
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с 
// помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// Например:
// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(a, b) {
    return function(x) {
        if (x >= a && x <= b) return x;
    }
}

function inArray(arr) {
    return function(x) {
        if (arr.includes(x)) return x;
    }
}


// Сортировать по полю
// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// Обычный способ был бы таким:
// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// Можем ли мы сделать его короче, например вот таким?
// users.sort(byField('name'));
// users.sort(byField('age'));

// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

function byField(field) {
    return function(firstUser, secondUser) {
        return firstUser[field] > secondUser[field] ? 1 : -1;
    }
}


// Установка и уменьшение значения счётчика

// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, 
// так и свойством функции. Или сделать два варианта решения: и так, и так.

// function makeCounter() {
//     let count = 0;
//     // ... ваш код ...
//   }
  
//   let counter = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
  
//   counter.set(10); // установить новое значение счётчика
  
//   alert( counter() ); // 10
  
//   counter.decrease(); // уменьшить значение счётчика на 1
  
//  alert( counter() ); // 10 (вместо 11)


function makeCounter() {
    let count = 0;

    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;  
}



// Вывод каждую секунду

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.


function printNumbers1(from, to) {
    let value = from;
    let id = setInterval(() => {
        console.log(value);

        if (value === to) {
            clearInterval(id);
        } else {
            value++;
        }
    }, 1000)
}


function printNumbers2(from, to) {
    let value = from;
    setTimeout(function fun() {
        console.log(value);

        if (value !== to) {
            value++;
            setTimeout(fun, 1000);
        }
    }, 1000)
}



////
function getUserFriends(userJson, id){
    let obj = JSON.parse(userJson);
    return obj.users.filter((user) => user.id === id) || [];
  }

const userJson = JSON.stringify({
    users: [
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Mary', age: 21 },
    ],
    friends: [
      [1, 2],
    ],
  });
  
  console.log(getUserFriends(userJson, 3)); // [{ id: 2, name: 'Mary', age: 21 }]
//   getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
//   getUserFriends(userJson, 3); // []

