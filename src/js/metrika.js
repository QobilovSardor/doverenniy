const appStore = 'app-store';
const playMarket = 'play-market';
const appGallary = 'app-gallary';
const call = 'call';//Звонок
const form = 'form';//форма для водителей

const number = "+73912727676";//Ввести так, как указано в ссылках
const siteName = "xn-----jlcucodidbcd8a.xn--p1ai";//Название сайтов, указанная в ссылке для перехода в форму регистрации

const arrAppStore = document.querySelectorAll('a[aria-label="Загрузите приложение для iOS"]');
const arrPlayMarket = document.querySelectorAll('a[aria-label="Мобильное приложение в Play Market"]');
const arrPAndroidMarket = document.querySelectorAll('a[aria-label="Загрузите мобильное приложение для Android"]');
const arrAppGallery = document.querySelectorAll('a[aria-label="Загрузите мобильное приложение для Huawei"]');
const arrMobileGallery = document.querySelectorAll('a[aria-label="Мобильное приложение в App Gallery"]');
const arrCall = document.querySelectorAll(`a[href="tel:${number}"]`);
const arrForm = document.querySelectorAll(`a[href="https://${siteName}/registration.html"]`);
const arrFormDouble = document.querySelectorAll(`a[href="/registration"]`);
const arrAnketaDouble = document.querySelectorAll(`a[aria-label="Заполнить анкету водителя"]`);

console.log(arrCall);

eachArr(arrAppStore, appStore);
eachArr(arrPlayMarket, playMarket);
eachArr(arrPAndroidMarket, playMarket);
eachArr(arrAppGallery, appGallary);
eachArr(arrMobileGallery, appGallary);
eachArr(arrCall, call);
eachArr(arrForm, form);
eachArr(arrFormDouble, form);
eachArr(arrAnketaDouble, form);

const code = 23700655;//Номер счетчика

window.addEventListener('click', (e) => {
    if(e.target.closest(`[${appStore}]`)) return ym(code,'reachGoal','AppStore');
    if(e.target.closest(`[${playMarket}]`)) return ym(code,'reachGoal','PlayMarket');
    if(e.target.closest(`[${appGallary}]`)) return ym(code,'reachGoal','AppGallery');
    if(e.target.closest(`[${call}]`)) return ym(code,'reachGoal','Zvonok');
    if(e.target.closest(`[${form}]`)) return ym(code,'reachGoal','anketa_voditel');
})

function eachArr(arr, name) {
    return arr.forEach(i => i.setAttribute(name, ''))
}