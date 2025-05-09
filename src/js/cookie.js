const body = document.body;
let cookieOpen = true; //Указывает на то, что уведомление видно пользователям, значение по умолчанию true
const message = {
    text1: "Пользуясь сайтом вы соглашаетсь на", //Текст вне ссылки
    textLink: "использование файлов cookie", //Текс ссылки
    url: "https://xn-----jlcucodidbcd8a.xn--p1ai/%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.html" //Ссылка на страницу ознакомления для использования cookie файлов
};

//Создаем элементы
const createBox = createEl('div');
const textInBox = createEl('a');
const createFlex = createEl('div');
const createClose = document.createElement('div');
//Присваеваем классы
classAdd(createBox, 'cookie-box');
classAdd(createClose, 'cookie-close');
//Заполняем контент
textInBox.href = message.url;
createFlex.innerText = message.text1 + " ";
textInBox.innerText = message.textLink;
//Задаем структуру
createFlex.appendChild(textInBox);
createBox.appendChild(createFlex);
createBox.appendChild(createClose);
body.appendChild(createBox);

//Видимость уведомления
cookieVisible(cookieOpen, createBox);
createClose.addEventListener('click', (e) => {
    console.log(createBox);
    cookieOpen = false;
    cookieVisible(cookieOpen, createBox);
})
//Функции
function createEl(type) {return document.createElement(`${type}`);};
function classAdd(el, className) {return el.classList.add(className);};
function cookieVisible(state, createBox) {
    if(state == true) createBox.classList.add('active');
    else if(state == false) createBox.classList.remove('active');
}