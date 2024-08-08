const anketa = () => {
   alert("Здравствуйте! Пошалуйста ответь на вопросы что бы заполнить анкету");
   const age = Number(prompt("Какой ваш возраст?"));
   const name = String(prompt("Ваше имя?"));
   const lastname = String(prompt("Ваша Фамилия?"));
   const job = String(prompt("Где вы работаете?"));
   alert("Сохраняю...")
   alert(`Готово! Данные сохранены ваши данные: Возраст - ${age}, Имя - ${name}, фамилия - ${lastname}, Место работы - ${job} `)
}