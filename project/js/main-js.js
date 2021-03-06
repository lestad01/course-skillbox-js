window.addEventListener('DOMContentLoaded', function () {
    //Map
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(function () {
        // Создание карты.
        let myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.699844, 37.520939],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13.5,
            controls: []
        });
        myPlacemark = new ymaps.Placemark([55.693213, 37.512503], {
            hintContent: 'Территория ИНТЦ МГУ'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/svg/Group_402.svg',
            // Размеры метки.
            iconImageSize: [58, 49],
        });

        myMap.geoObjects.add(myPlacemark);
    });

     //validation form start
     const form = document.querySelector('.modal__form');
     const inputs = form.querySelectorAll('.modal-resident__input');
     const errorsInputs = form.querySelectorAll('.modal-resident__part-error');

     //очистка формы от классов при выходе из формы
     function clearAllClasses(){
        for (let q = 0; q < inputs.length; q++){
            inputs[q].classList.remove('modal-resident__input-active');
            inputs[q].classList.remove('modal-resident__input-error');
        }
        for (let s = 0; s < errorsInputs.length; s++){
            errorsInputs[s].style.display = 'none';
        }    
     }
     function clearClasses(){
        for (let q = 0; q < inputs.length; q++){
            inputs[q].classList.remove('modal-resident__input-active');
        } 
     }

     //действия с формой
     form.addEventListener('submit', function (event) {
         event.preventDefault();
 
         for (let i = 0; i < inputs.length; i++) {
             let prevElement = inputs[i].previousElementSibling;
             if (!inputs[i].value) {
                 prevElement.style.display = 'flex';
                 inputs[i].classList.add('modal-resident__input-error');
                 inputs[i].classList.add('modal-resident__input-active');
             }
         }
         errorsInputs.forEach(errorInput => {
             errorInput.addEventListener('click', function (event) {
                 let err = errorInput.nextElementSibling;
                 if (event.target.className == 'modal-resident__error-text') {
                     errorInput.classList.remove('modal-resident__part-error');
                     errorInput.style.display = 'none';
                     err.classList.remove('modal-resident__input-error');
                 } else {
                     errorInput.classList.add('modal-resident__part-error');
                     errorInput.style.display = 'flex';
                     err.classList.add('modal-resident__input-error');
                 }
             });
         });
        
         clearClasses();
         form.reset();
     });
     //добавление/удаление классов error-инпутам
 
     //добавление класса при введении в инпут
     inputs.forEach(input => {
         input.addEventListener('input', () => {
            if(input.value == ''){
                input.classList.remove('modal-resident__input-active');
            } else {
                input.classList.add('modal-resident__input-active');
            }
         });
     });
 
     //validation form end


    //modal start
    const modalTriggerResident = document.querySelectorAll('[data-modal');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');


    function closeBtn() {
        modal.classList.remove('modal-resident_show');
        document.body.style.overflow = '';
        clearAllClasses();
        form.reset();
    }
    modalTriggerResident.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('modal-resident_show');
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseBtn.addEventListener('click', closeBtn);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('modal-resident_show')) {
            closeBtn();
        }
    });
    //modal end

    // anchorLinks start (плавное перемещение по ссылкам (якорям))
    const anchorFunction = function () {
        const anchors = document.querySelectorAll('a[href*="#"]');
        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const blockID = anchor.getAttribute('href');
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    };
    anchorFunction();
    // anchorLinks end

   

    //burger-menu and adaptive-menu start
    // document.addEventListener('touchstart', addClassBurger, {passive: true}); // установка пассивного прослушивателя событий
    const headerBurger = document.querySelector('.header__burger');
    const headerBurgerMenu = document.querySelector('.header__pull-out-menu-block');
    const closeBurger = document.querySelector('.header__top-content-burger');


    function closeBurgerMenu() {
        headerBurgerMenu.classList.remove('header__pull-out-menu-active');
        document.body.style.overflow = '';
    }
    headerBurger.addEventListener('touchstart', (e) => {
        e.preventDefault();
        headerBurgerMenu.classList.add('header__pull-out-menu-active');
        document.body.style.overflow = 'hidden';
    });

    closeBurger.addEventListener('touchstart', () => {
        closeBurgerMenu();
    });

    headerBurgerMenu.addEventListener('touchstart', (e) => {
        if (e.target === headerBurgerMenu) {
            closeBurgerMenu();
        }
    });
    //burger-menu and adaptive-menu end


});

        // swiper adaptive start
        const swiperClusterAdaptive = new Swiper('.swiper-cluster-adaptive', {
            pagination: {
                el: '.swiper-paginator-adaptive',
                //буллеты
              clickable: true
            },

          });
        // swiper adaptive end

    //swiper adaptive (800px) start
    const swiperPrivAdaptive = new Swiper('.swiper', {

        // If we need pagination
        pagination: {
            el: '.swiper-paginat',
            //буллеты
          clickable: true
        }
      });
    //swiper adaptive (800px) end