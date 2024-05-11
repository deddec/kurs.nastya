const bar = document.getElementById("bar"); //кнопка меню
const nav = document.getElementById("navbar"); //само меню, которое должно появляться или исчезать.
const close = document.getElementById("close");//закрытие меню
// Здесь проверяется, существует ли элемент bar. Если элемент существует, то добавляется обработчик события "click", который выполняет следующее:
// - При клике на элемент bar добавляется класс "active" к элементу nav, что, вероятно, делает меню видимым.
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}
//Здесь также проверяется, существует ли элемент close. Если элемент существует, то добавляется обработчик события "click", который выполняет следующее:
// - При клике на элемент close у элемента nav удаляется класс "active", скрывая меню. 

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}
