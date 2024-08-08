console.log("succes!")


// Переменные и коменты

var pem1 = 25
const PEM2 = 3.15
let pem2 = 75

let summ

summ = pem1 + pem2

console.log("----------------------------------------------------")
console.log("----------------------------Переменные--------------")
console.log(summ)
console.log("----------------------------------------------------")

// виды прописи

// myMainColor cameCase
// my_main_color snake_case
// my-main-color kebab-case
// MyMainColor  PascalCase
// MYMAIN CONST


// Типы данных

console.log("----------------------------------------------------")
console.log("--------------------ТИПЫ ДАННЫХ---------------------")
console.log("----------------------------------------------------")

// Примитивные типы данных 
let stringVAR = "jhjdfhjkdkfjkdfdfdfh"        // 1 Строка
let numberVAR = 15 // 15.5                    // 2 Число
let boolVAR = true // or fasle                // 3 Булеан
let nullVAR = null // пусто                   // 4 Ничего
let undefinedVAR = undefined // не определен  // 5 неопереден
let sybolVAR = Symbol //es6                   // 6 какой то символ

// ссылочные типы данных
let arrayVAR = ["apple", "froiu", "aaaa"]     // 7 Массив
let objectVAR = {                             // 8 Обьект
   name: "alex",
   year: 5690,
   sex: undefined
}  
let functionVAR = (mesg) => console.log(mesg)  // 9 Функция
functionVAR("hello i am a function")




// преобразование типов 

console.log("----------------------------------------------------")
console.log("--------------------ПРЕОБРАЗОВАНИЕ ТИПОВ------------")
console.log("----------------------------------------------------")

//// преобразование к строке

let x = String(111);
x = String(2 + 3);

console.log(x);
console.log(typeof x);
console.log(x.length);

