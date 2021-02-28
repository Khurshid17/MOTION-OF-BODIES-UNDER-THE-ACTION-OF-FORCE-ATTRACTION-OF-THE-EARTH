const g = 10
let total = "";
let h = +prompt('Сколько метров высоты', 'м');
let v = +prompt('Определите скорость', 'м/с');
let t = (2*h/g)**0.5
let s = 1
s = v * t
console.log(t + " с");
console.log(s + " м");