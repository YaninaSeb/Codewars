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
