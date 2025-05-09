// Функция, которая прокручивает страницу вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Показывать или скрывать кнопку "Наверх" в зависимости от прокрутки страницы
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTop").style.display = "block";
  } else {
    document.getElementById("scrollToTop").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы с классом "lp-parent"
  var parentItems = document.querySelectorAll(".lp-parent");

  // Для каждого родительского элемента добавляем обработчик события клика
  parentItems.forEach(function (parentItem) {
    parentItem.addEventListener("click", function (event) {
      // Получаем дочерний элемент
      var childElement = parentItem.querySelector(".lp-navbar-dropdown, .lp-nav-sub");

      // Проверяем, видим ли дочерний элемент
      var isDisplayed = window.getComputedStyle(childElement).display !== "none";

      // Изменяем стиль дочернего элемента в зависимости от его текущего состояния
      if (isDisplayed) {
        childElement.style.display = "none";
        document.querySelector('.lp-parent span').classList.remove("active");
      } else {
        childElement.style.display = "block";
        document.querySelector('.lp-parent span').classList.add("active");
      }

      // Отменяем дальнейшее распространение события клика
      event.stopPropagation();
    });

    // Добавляем обработчики событий для показа/скрытия при наведении мыши
    var dropdownItem = parentItem.querySelector(".lp-navbar-dropdown");
    if (dropdownItem) {
      parentItem.addEventListener("mouseover", function () {
        dropdownItem.classList.add("active");
      });
      parentItem.addEventListener("mouseout", function () {
        setTimeout(function () {
          dropdownItem.classList.remove("active");
        }, 2000); // Через 2 секунды
      });
    }
  });

  // Добавляем обработчик события клика для закрытия блока при клике вне блока
  document.addEventListener("click", function (event) {
    // Проверяем, был ли клик вне блока или его родителей
    var isClickedOutside = true;
    var targetElement = event.target;
    while (targetElement) {
      if (targetElement.classList.contains("lp-parent")) {
        isClickedOutside = false;
        break;
      }
      targetElement = targetElement.parentElement;
    }

    // Если клик был вне блока или его родителей, скрываем блок
    if (isClickedOutside) {
      var activeDropdownItems = document.querySelectorAll(".lp-navbar-dropdown.active");
      activeDropdownItems.forEach(function (item) {
        item.classList.remove("active");
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var menuOpenButton = document.getElementById("menu-open");
  var closeMenuButton = document.getElementById("close-menu");
  var offcanvas = document.querySelector(".lp-offcanvas");

  // Добавляем обработчик события клика на кнопку открытия меню
  menuOpenButton.addEventListener("click", function (event) {
    event.preventDefault();
    offcanvas.style.display = "block";
  });

  // Добавляем обработчик события клика на кнопку закрытия меню
  closeMenuButton.addEventListener("click", function (event) {
    event.preventDefault();
    offcanvas.style.display = "none";
  });
});

const images = document.querySelectorAll('.intro-image');
if (images) {
  let current = 0;

  function showNextImage() {
    images.forEach(img => img.classList.remove('show'));
    images[current].classList.add('show');
    current = (current + 1) % images.length;
  }

  // Boshlang‘ich rasmni ko‘rsatish
  showNextImage();

  // Har 1 sekundda almashtir
  setInterval(showNextImage, 1000);
}

