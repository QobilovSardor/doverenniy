document.addEventListener("DOMContentLoaded", function() {
	// Получаем все элементы слайдера и точечные переключатели
	var slides = document.querySelectorAll(".vacancy-slider-items > li");
	var slidePoints = document.querySelectorAll(".vacancy-slider-nav > li");
  
	// Получаем кнопки переключения слайдов
	var prevButton = document.getElementById("button-previous");
	var nextButton = document.getElementById("button-next");
  
	// Устанавливаем обработчики событий на кнопки переключения
	prevButton.addEventListener("click", function(e) {
	  e.preventDefault();
	  switchSlide("prev");
	});
  
	nextButton.addEventListener("click", function(e) {
	  e.preventDefault();
	  switchSlide("next");
	});
  
	// Устанавливаем обработчики событий на точечные переключатели
	slidePoints.forEach(function(point, index) {
	  point.addEventListener("click", function(e) {
		e.preventDefault();
		switchSlideByPoint(index);
	  });
	});
  
	// Функция для переключения слайдов вперед или назад
	function switchSlide(direction) {
	  var currentSlideIndex = getCurrentSlideIndex();
	  var nextSlideIndex;
  
	  if (direction === "next") {
		nextSlideIndex = (currentSlideIndex + 1) % slides.length;
	  } else {
		nextSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	  }
  
	  // Переключаем слайды
	  switchToSlide(nextSlideIndex);
	}
  
	// Функция для переключения слайда по точечному переключателю
	function switchSlideByPoint(index) {
	  // Переключаем слайды
	  switchToSlide(index);
	}
  
	// Функция для определения текущего индекса активного слайда
	function getCurrentSlideIndex() {
	  var currentSlideIndex = 0;
	  for (var i = 0; i < slides.length; i++) {
		if (slides[i].style.display === "block") {
		  currentSlideIndex = i;
		  break;
		}
	  }
	  return currentSlideIndex;
	}
  
	// Функция для переключения на заданный слайд
	function switchToSlide(index) {
	  // Скрываем все слайды
	  slides.forEach(function(slide) {
		slide.style.display = "none";
	  });
  
	  // Удаляем класс активности у всех точечных переключателей
	  slidePoints.forEach(function(point) {
		point.classList.remove("vacancy-active");
	  });
  
	  // Отображаем нужный слайд и активируем соответствующий точечный переключатель
	  slides[index].style.display = "block";
	  slidePoints[index].classList.add("vacancy-active");
	}
  });