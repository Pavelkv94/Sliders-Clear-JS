// Берём ширину видимой части слайда
let viewport = document.getElementById("viewport").offsetWidth;
// Берём кнопку переключения на следующий слайд
let btnNext = document.getElementById("next");
// Берём внутренности слайда
let slides = document.querySelectorAll(".slide");
// Создаём массив с новыми слайдами
let sliders = [];

// Цикл по слайдам
for (let i = 0; i < slides.length; ++i) {
    // Добавляем изображение из слайда 
    sliders[i] = slides[i].querySelector('img');
    // Удаляем слайд
    slides[i].remove()
}

// Номер слайда
let step = 0;
// Позиция сайда
let offset = 0;
 
// Функция для отрисовки сайда
function drow() {
    // Создаём элемент слайда
    let slide = document.createElement("div");
    // Добавляем касс slide новому элементу
    slide.classList.add("slide");
    // Добавляем дочерний элемент контент слайда
    slide.appendChild(sliders[step])
    // Даём позицию для слайда
    slide.style.left = offset * viewport + "px"
    // Добавляем слайд в контейнер слайдеров
    document.querySelector(".slider").appendChild(slide)
    // Если следующий слайд равен числу слайдеров, то
    if (step + 1 == slides.length) {
        // Включаем первый слайд
        step = 0;
    } else { // Иначе
        // Увеличиваем номер слайда на один
        step++
    }
    // Назначаем позицию слайда
    offset = 1
}

drow(); drow()


// JavaScript
// Создаём функцию для переключения
function left() {
    // Запрещаем событие кнопки вперёд на клик
    btnNext.removeEventListener('click', left)
    // Берём слайды
    let slides2 = document.querySelectorAll(".slide")
    // Позиция
    let offset2 = 0;
    // Цикл для перемещения слайда
    for (let i = 0; i < slides2.length; i++) {
        // Меняем позицию слайда
        slides2[i].style.left = offset2 * viewport - viewport + "px"
        // Увеличиваем позицию
        offset2++;
    } 
    // Ставим таймер
    setTimeout(function () {
        // Удаляем прошлый слайд
        slides2[0].remove()
        // Рисуем следующий слайд
        drow()
        // Назначаем событие на кнопку вперёд
        btnNext.addEventListener("click", left)
    }, 500)
}

btnNext.addEventListener("click", left)