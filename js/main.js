document.getElementById("menu-icon").addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("change");
    document.getElementById("menu-top").classList.toggle("show");
});

document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu-top");
    const menuIcon = document.getElementById("menu-icon");

    if (menu.classList.contains("show") && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("show");
        menuIcon.classList.remove("change");
    }
});

function toggleSearch() {
    const searchWrapper = document.getElementById('search-wrapper');
    const searchInput = document.getElementById('search-input');

    if (!searchWrapper.classList.contains('active')) {
        searchWrapper.classList.add('active');
        searchInput.focus();
    } else if (searchInput.value === '') {
        searchWrapper.classList.remove('active');
    }
}

// document.addEventListener('click', (event) => {
//     const searchWrapper = document.getElementById('search-wrapper');
//     const searchInput = document.getElementById('search-input');

//     if (!searchWrapper.contains(event.target) && searchInput.value === '') {
//         searchWrapper.classList.remove('active');
//     }
// });

// function performSearch() {
//     const searchInput = document.getElementById("search-input");
//     if (searchInput.value) {
//         console.log(`Поиск по запросу: ${searchInput.value}`); 
//         searchInput.value = ''; 
//         document.getElementById('search-wrapper').classList.remove('active');
//     }
// }

// document.getElementById("search-input").addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         performSearch();
//     }
// });


// const heartIcon = document.getElementById("heart");

// // Получаем состояние сердечка из localStorage
// const isHeartClicked = localStorage.getItem("heartState") === "true";

// // Проверяем состояние при загрузке страницы и устанавливаем правильное изображение
// if (isHeartClicked) {
//     heartIcon.src = "imajes/vector-heard-like.svg"; // Заполненное сердечко
// } else {
//     heartIcon.src = "imajes/vector-heard.svg"; // Пустое сердечко
// }

// // Обработчик клика на сердечко
// heartIcon.addEventListener("click", function () {
//     // Проверяем текущее изображение сердечка
//     const isCurrentlyFilled = heartIcon.src.includes("vector-heard-like.svg");

//     // Если оно было заполнено, делаем пустым, если пустое - делаем заполненным
//     if (isCurrentlyFilled) {
//         heartIcon.src = "imajes/vector-heard.svg"; // Пустое сердечко
//         localStorage.setItem("heartState", "false"); // Сохраняем состояние как пустое
//     } else {
//         heartIcon.src = "imajes/vector-heard-like.svg"; // Заполненное сердечко
//         localStorage.setItem("heartState", "true"); // Сохраняем состояние как заполненное
//     }
// });




const translations = {
    ua: 'translations/translations_ua.json',
    ru: 'translations/translations_ru.json',
};

function switchLanguage(lang) {
    loadTranslations(translations[lang]);
}

function loadTranslations(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('novinki').textContent = data.novinki;
            document.getElementById('product').textContent = data.product;
            document.getElementById('costumes').textContent = data.costumes;
            document.getElementById('instagram').textContent = data.instagram;
            document.getElementById('contacts').textContent = data.contacts;
            document.getElementById('tshirts').textContent = data.tshirts;
            document.getElementById('bottom').textContent = data.bottom;
            document.getElementById('top').textContent = data.top;
            document.getElementById('dresses').textContent = data.dresses;
            document.getElementById('hoodie').textContent = data.hoodie;
            document.getElementById('new').textContent = data.new;
            document.getElementById('new_text').textContent = data.new_text;
            document.getElementById('new_text1').textContent = data.new_text1;
            document.getElementById('new_text2').textContent = data.new_text2;
            document.getElementById('new_text3').textContent = data.new_text3;
            document.getElementById('top_product1').textContent = data.top_product1;
            document.getElementById('top_product2').textContent = data.top_product2;
            document.getElementById('product_bomber').textContent = data.product_bomber;
            document.getElementById('product_dresses').textContent = data.product_dresses;
            document.getElementById('product_flour').textContent = data.product_flour;
            document.getElementById('costums').textContent = data.costums;
            document.getElementById('costums').textContent = data.costums;
            document.getElementById('same_day_shipping').textContent = data.same_day_shipping;
            document.getElementById('order_by').textContent = data.order_by;
            document.getElementById('easy_return').textContent = data.easy_return;
            document.getElementById('within_14_days').textContent = data.within_14_days;
            document.getElementById('made_with_care').textContent = data.made_with_care;
            document.getElementById('with_love').textContent = data.with_love;
            document.getElementById('ecstatic').textContent = data.ecstatic;
            document.getElementById('tag_to_join').textContent = data.tag_to_join;
            document.getElementById('footer_new').textContent = data.footer_new;
            document.getElementById('footer_product').textContent = data.footer_product;
            document.getElementById('footer_costumes').textContent = data.footer_costumes;
            document.getElementById('footer_insta').textContent = data.footer_insta;
            document.getElementById('footer_contact').textContent = data.footer_contact;
        })
        .catch(error => console.error('Ошибка загрузки перевода:', error));
}

document.getElementById('language').addEventListener('change', function () {
    const selectedLang = this.value;
    switchLanguage(selectedLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'ua';
    document.getElementById('language').value = defaultLang;
    loadTranslations(translations[defaultLang]);
});


