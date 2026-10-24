let a = +prompt("Введите первое число")
while (a <= -1000 || a >= 1000 || Number.isNaN(a)) {
    a = +prompt("Вы ввели некоректное значение, введите заново")
};
console.log(a)

let b = prompt("Введите действие")
while (!(b === "-" || b === "+")) {
    b = prompt("Вы ввели некоректное действие, введите заново")
};
console.log(b)

let c = +prompt("Введите второе число")
while (c <= -1000 || c >= 1000 || Number.isNaN(c)) {
    c = +prompt("Вы ввели некоректное значение, введите заново")
};
console.log(c)

let d = 0
if (b == "+") {
    d += (a + c)
}
else if (b == "-") {
    d += (a - c)
};
console.log(d)

