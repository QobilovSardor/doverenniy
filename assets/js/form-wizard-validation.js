/**
 *  Form Wizard
 */

'use strict';






(function () {

  const selectcity = $('.selectCity'),
    selectPicker = $('.selectpicker');

  // Wizard Validation
  // --------------------------------------------------------------------
  const wizardValidation = document.querySelector('#wizard-validation');
  if (typeof wizardValidation !== undefined && wizardValidation !== null) {
    // Wizard form
    const wizardValidationForm = wizardValidation.querySelector('#wizard-validation-form');
    // Wizard steps
    const wizardValidationFormStep1 = wizardValidationForm.querySelector('#account-details-validation');
    const wizardValidationFormStep2 = wizardValidationForm.querySelector('#personal-info-validation');
    const wizardValidationFormStep3 = wizardValidationForm.querySelector('#social-links-validation');
    // Wizard next prev button
    const wizardValidationNext = [].slice.call(wizardValidationForm.querySelectorAll('.btn-next'));
    const wizardValidationPrev = [].slice.call(wizardValidationForm.querySelectorAll('.btn-prev'));

    const validationStepper = new Stepper(wizardValidation, {
      linear: true
    });
    
    

    // Account details
    const FormValidation1 = FormValidation.formValidation(wizardValidationFormStep1, {
      fields: {
	          
        FormPhone: {
          validators: {
            notEmpty: {
              message: 'Вы не указали ваш телефон'
            },
          }
        },
        FormRefCode: {
          validators: {
            stringLength: {
              min: 4,
              max: 4,
              message: 'Реферальный код должен состоять из 4 символов'
            },
            regexp: {
              regexp: /^[a-zA-Z0-9]+$/,
              message: 'Реферальный код состоит из латинских букв и цифр'
            }
          }
        },
        FormCity: {
          validators: {
            notEmpty: {
              message: 'Вы не указали город'
            }
          }
        },
        FormFIO: {
          validators: {
            notEmpty: {
              message: 'Вы не указали вашу Фамилию Имя Отчество'
            },
          }
        },
        FormCity: {
          validators: {
            notEmpty: {
              message: 'Вы не указали город'
            }
          }
        },
        FormSex: {
          validators: {
            notEmpty: {
              message: 'Вы не указали пол'
            }
          }
        },
        FormBirthDate: {
          validators: {
             notEmpty: {
               message: 'Вы не указали дату рождения'
             },
             date: {
               format: 'YYYY-MM-DD',
               message: 'Введите дату в формате YYYY-MM-DD'
             },
             callback: {
               message: 'Дата рождения не может быть больше текущей даты',
               callback: function(input) {
                 const selectedBirthDate = new Date(input.value);
                 const today = new Date();
                 return selectedBirthDate <= today;
               }
             }
          }
        },
        FormPassNo: {
          validators: {
            notEmpty: {
              message: 'Вы не указали серию и номер паспорта'
            },
          }
        },
        FormPassWho: {
          validators: {
            notEmpty: {
              message: 'Вы не указали кем выдан паспорт'
            }
          }
        },
        FormPassDate: {
          validators: {
             notEmpty: {
               message: 'Вы не указали дату выдачи паспорта'
             },
             date: {
               format: 'YYYY-MM-DD',
               message: 'Введите дату в формате YYYY-MM-DD'
             },
             callback: {
               message: 'Дата выдачи паспорта не может быть больше текущей даты',
               callback: function(input) {
                 const selectedPassDate = new Date(input.value);
                 const today = new Date();
                 return selectedPassDate <= today;
               }
             }
          }
        },
        FormPassOfficeCode: {
          validators: {
            notEmpty: {
              message: 'Вы не указали код подразделения'
            }
          }
        },
        FormAddress: {
          validators: {
            notEmpty: {
              message: 'Вы не указали ваш адрес регистрации'
            }
          }
        }
        
        
        
        
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      },
      init: instance => {
        instance.on('plugins.message.placed', function (e) {
          //* Move the error message out of the `input-group` element
          if (e.element.parentElement.classList.contains('input-group')) {
            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
          }
        });
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    // Personal info
   const FormValidation2 = FormValidation.formValidation(wizardValidationFormStep2, {
     fields: {
       FormVUNo: {
         validators: {
           notEmpty: {
             message: 'Вы не указали номер ВУ'
           }
         }
       },
       FormVUDate: {
         validators: {
           notEmpty: {
             message: 'Вы не указали срок действия ВУ'
           },
           date: {
             format: 'YYYY-MM-DD',
             message: 'Введите дату в формате YYYY-MM-DD'
           },
           callback: {
             message: 'Дата не может быть меньше текущей',
             callback: function(input) {
               const selectedDate = new Date(input.value);
               const today = new Date();
               return selectedDate >= today;
             }
           }
         }
       },
       "FormVUCategory[]": {
         validators: {
           choice: {
             min: 1,
             max: 5,
             message: 'Выберите категорию вашего ВУ'
           }
         }
       }
     },
     plugins: {
       trigger: new FormValidation.plugins.Trigger(),
       bootstrap5: new FormValidation.plugins.Bootstrap5({
         // Use this for enabling/changing valid/invalid class
         // eleInvalidClass: '',
         eleValidClass: '',
         rowSelector: '.col-sm-12'
       }),
       autoFocus: new FormValidation.plugins.AutoFocus(),
       submitButton: new FormValidation.plugins.SubmitButton()
     }
   }).on('core.form.valid', function () {
     // Jump to the next step when all fields in the current step are valid
     validationStepper.next();
   });


    // Bootstrap Select (i.e Language select)
    if (selectPicker.length) {
      selectPicker.each(function () {
        var $this = $(this);
        $this.selectpicker().on('change', function () {
          FormValidation2.revalidateField('formValidationLanguage');
        });
      });
    }

    // select2 
    if (selectcity.length) {
      selectcity.each(function () {
        var $this = $(this);
        $this.wrap('<div class="position-relative"></div>');
        $this
          .select2({
            placeholder: 'Выберите город',
            dropdownParent: $this.parent()
          })
          .on('change', function () {
            // Revalidate the color field when an option is chosen
            FormValidation1.revalidateField('FormCity');
          });
      });
    }

    // Social links
    const FormValidation3 = FormValidation.formValidation(wizardValidationFormStep3, {
      fields: {
	      
	      
	    FormCarName: {
          validators: {
            notEmpty: {
              message: 'Вы не указали марку автомобиля'
            }
          }
        },
	    FormCarModel: {
          validators: {
            notEmpty: {
              message: 'Вы не указали модель автомобиля'
            }
          }
        },
	    FormCarColor: {
          validators: {
            notEmpty: {
              message: 'Вы не указали цвет автомобиля'
            }
          }
        },
	    FormCarYear: {
          validators: {
            notEmpty: {
              message: 'Вы не указали год выпуска автомобиля'
            }
          }
        },
	    FormCarPlate: {
          validators: {
            notEmpty: {
              message: 'Вы не указали гос номер автомобиля'
            }
          }
        },
        confidetialPolicy: {
            validators: {
                choice: {
					min: 1,
					message: 'Вы должны принять правила политики конфиденциальности'
                }
            }
        },
        
        personalData: {
            validators: {
                choice: {
	                min: 1,
                    message: 'Вы должны дать согласие на обработку персональных данных'
                }
            }
        },
        ofertaContract: {
		    validators: {
		        choice: {
			        min: 1,
		            message: 'Вы должны принять условия договора оферты'
		        }
		    }
		}
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
	    
    console.log('попытка вызвать отправку формы form...')    
	submitForm();
	  

	});
	
	
    function submitForm() {
	    
	console.log('Submitting form...');    
    // Создаем объект FormData для хранения данных формы
    const formData = new FormData(wizardValidationForm);

    // Отправляем данные формы на сервер с помощью AJAX-запроса
    $.ajax({
        url: "/send_form.php", // URL-адрес обработчика
        type: "POST", // Метод запроса
        data: formData, // Данные для отправки
        processData: false, // Не обрабатывать FormData
        contentType: false, // Не задавать тип контента
        success: function(response) {
            // Парсим JSON-ответ
            const responseData = JSON.parse(response);

            if (responseData.status === 'success') {
                // Если статус успешный, отображаем сообщение об успешной отправке
                $('#wizard-validation-form')[0].reset();
                $('#success-message').html('Ваша анкета получена и будет рассмотрена в течение 3-х рабочих дней. По результатам проверки, Вам поступит СМС сообщение с данными авторизации');
                $('.toast-success').toast('show');
            } else {
                // Если статус неуспешный, отображаем сообщение об ошибке
                $('#error-message').html(responseData.message);
                $('.toast-error').toast('show');
            }
        },
        error: function(xhr, status, error) {
            // Отображаем сообщение об ошибке, если запрос не удался
            console.error('Ошибка при отправке:', xhr.statusText);
            $('#error-message').html('Произошла ошибка при отправке формы.');
            $('#error-message').show();
        }
    });
	}
	

    wizardValidationNext.forEach(item => {
      item.addEventListener('click', event => {
        // When click the Next button, we will validate the current step
        switch (validationStepper._currentIndex) {
          case 0:
            FormValidation1.validate();
            break;

          case 1:
            FormValidation2.validate();
            break;

          case 2:
            FormValidation3.validate();
            break;

          default:
            break;
        }
      });
    });

    wizardValidationPrev.forEach(item => {
      item.addEventListener('click', event => {
        switch (validationStepper._currentIndex) {
          case 2:
            validationStepper.previous();
            break;

          case 1:
            validationStepper.previous();
            break;

          case 0:

          default:
            break;
        }
      });
    });
  }
})();
