// С помощью встроенной браузерной функции prompt поочерёдно ввести два значения. Если оба значения являются валидными числами, то вывести в консоли результат в виде первого числа в системе счисления второго.
// Если хотя бы одно из введённых значений является некорректным числом, вывести в консоли сообщение: "Некорректный ввод!" и завершить программу.
// > Примеры:
// Вводим 10 и 2, получаем 1010
// Вводим 872 и 8, получаем 1550
// Вводим 2 и 'abc', получаем "Некорректный ввод!"


// Task 2
// С помощью встроенной браузерной функции prompt поочерёдно ввести два значения. Если первое значение является невалидным числом, вывести в консоли сообщение: "Некорректный ввод!" и завершить программу. В ином случае, если второе значение является невалидным числом вывести такое же сообщение об ошибке и завершить программу. Если оба значения являются валидными числами, то вывести в консоль результат в виде: "Ответ: [сумма двух чисел], [частное двух чисел]."
// > Примеры:
// Вводим 10 и 2, получаем "Ответ: 12, 5."
// Вводим 872 и 8, получаем "Ответ: 880, 109."
// Вводим 'abc', получаем "Некорректный ввод!"

const task2 = () => {
    let number1 = +prompt('Введите первое число:')

    if (typeof (number1) !== 'number') {
        return alert('Некорректный ввод!')
    }

    let number2 = +prompt('Введите второе число:')

    if (typeof (number2) !== 'number') {
        return alert('Некорректный ввод!')
    }

    return alert(`Ответ: ${number1 + number2}, ${number1 / number2}`)
}

task2()