var PhoneEelement = document.getElementById('formValidationTel');
	var TelMask = {
	  mask: '{8}(000)000-00-00'
	};
	var maskTel = IMask(PhoneEelement, TelMask);
	
	var PassNo = document.getElementById('formValidationPassNo');
	var PassNoMask = {
	  mask: '0000 000000'
	};
	var maskPassNo = IMask(PassNo, PassNoMask);
	
	
	var PassOfficeCode = document.getElementById('formValidationPassOfficeCode');
	var PassOfficeCodeMask = {
	  mask: '000-000'
	};
	var maskPassOfficeCodeMask = IMask(PassOfficeCode, PassOfficeCodeMask);
	
	var VUNo = document.getElementById('formValidationVUNo');
	var VUNoMask = {
	  mask: '0000 000000'
	};
	var maskVUNo = IMask(VUNo, VUNoMask);
	
/*
    $(document).ready(function() {
        $('#formValidationСarPlate').inputmask('a999aa999', {
            placeholder: ''
        });
    });
*/
	
	document.addEventListener("DOMContentLoaded", function() {
	    var selectSex = document.getElementById("formValidationSex");
							
	// Устанавливаем placeholder при загрузке страницы
	updatePlaceholder();
			
	// Обновляем placeholder при изменении значения поля выбора
	selectSex.addEventListener("change", updatePlaceholder);
							
	function updatePlaceholder() {
	    var selectedOption = selectSex.options[selectSex.selectedIndex];
	    var placeholderText = selectedOption && selectedOption.value ? selectedOption.innerText : "Укажите пол";
	    selectSex.setAttribute("data-placeholder", placeholderText);
	}
	});
	
	document.addEventListener("DOMContentLoaded", function() {
	    var selectCity = document.getElementById("formValidationCity");
							
	// Устанавливаем placeholder при загрузке страницы
	updatePlaceholder();
							
	// Обновляем placeholder при изменении значения поля выбора
	selectCity.addEventListener("change", updatePlaceholder);
							
	function updatePlaceholder() {
	    var selectedOption = selectCity.options[selectCity.selectedIndex];
	    var placeholderText = selectedOption && selectedOption.value ? selectedOption.innerText : "Укажите город";
	    selectCity.setAttribute("data-placeholder", placeholderText);
	}
	});
	
	
	document.addEventListener("DOMContentLoaded", function() {
	    var selectCarYear = document.getElementById("formValidationСarYear");
							
	// Устанавливаем placeholder при загрузке страницы
	updatePlaceholder();
							
	// Обновляем placeholder при изменении значения поля выбора
	selectCarYear.addEventListener("change", updatePlaceholder);
							
	function updatePlaceholder() {
	    var selectedOption = selectCarYear.options[selectCarYear.selectedIndex];
	    var placeholderText = selectedOption && selectedOption.value ? selectedOption.innerText : "Укажите год автомобиля";
	    selectCarYear.setAttribute("data-placeholder", placeholderText);
	}
	});
	
	
// 	var today = new Date();
// 
// 	// Форматируем дату в формат YYYY-MM-DD (как требуется для атрибута max)
// 	var year = today.getFullYear();
// 	var month = String(today.getMonth() + 1).padStart(2, '0');
// 	var day = String(today.getDate()).padStart(2, '0');
// 	var maxDate = year + '-' + month + '-' + day;
// 	
// 	// Устанавливаем максимальное значение для поля ввода даты рождения
// 	document.getElementById('formValidationBirthDay').setAttribute('max', maxDate);
// 	document.getElementById('formValidationPassDate').setAttribute('max', maxDate);	
// 	document.getElementById('formValidationVUDate').setAttribute('min', maxDate);	
// 
// 	
	
	document.addEventListener('DOMContentLoaded', function() {
		const inputField = document.getElementById('formValidationСarPlate');
	
		// Обработчик события для поля ввода
		inputField.addEventListener('input', function(event) {
		  // Преобразование введенного текста в заглавные буквы
		  const newValue = event.target.value.toUpperCase();
		  // Установка нового значения в поле ввода
		  event.target.value = newValue;
		});
	  });
	  
$(function () {
		const select2 = $('.select2'),
		  selectPicker = $('.selectpicker');
	  
		// Bootstrap select
		if (selectPicker.length) {
		  selectPicker.selectpicker();
		}
	  
		// select2
		if (select2.length) {
		  select2.each(function () {
			var $this = $(this);
			$this.wrap('<div class="position-relative"></div>');
			$this.select2({
			  placeholder: 'Select value',
			  dropdownParent: $this.parent()
			});
		  });
		}
	  });