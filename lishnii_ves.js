const lishnii_ves = () => {
   alert("Давайте определим, есть ли у вас ожирение)))");
   const weight = Number(prompt("Введите ваш вес в килограммах"));
   const hight = Number(prompt("Введите ваш рост в метрах, например 1.7"));

   const calc = (weight, hight) => {
       const indexMass = weight / (hight ** 2);
       let round = Math.round(indexMass);

       if (round < 18.5) {
           alert('Недостаточная масса тела');
       } else if (round >= 18.5 && round <= 24.9) {
           alert('Нормальная масса тела');
       } else if (round >= 25 && round <= 29.9) {
           alert('Избыточная масса тела');
       } else if (round >= 30 && round <= 34.9) {
           alert('Ожирение первой степени');
       } else if (round >= 35 && round <= 39.9) {
           alert('Ожирение второй степени');
       } else if (round >= 40) {
           alert('Ожирение третьей степени');
       } else {
           alert('Ошибка: некорректные данные');
       }
   }
   calc(weight, hight);
}



