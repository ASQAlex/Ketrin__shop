  document.getElementById("menu-icon").addEventListener("click", function(event) {
    event.stopPropagation();
    this.classList.toggle("change");
    document.getElementById("menu-top").classList.toggle("show");
});

document.addEventListener("click", function(event) {
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


const heartIcon = document.getElementById("heart");

// Получаем состояние сердечка из localStorage
const isHeartClicked = localStorage.getItem("heartState") === "true";

// Проверяем состояние при загрузке страницы и устанавливаем правильное изображение
if (isHeartClicked) {
    heartIcon.src = "imajes/vector-heard-like.svg"; // Заполненное сердечко
} else {
    heartIcon.src = "imajes/vector-heard.svg"; // Пустое сердечко
}

// Обработчик клика на сердечко
heartIcon.addEventListener("click", function () {
    // Проверяем текущее изображение сердечка
    const isCurrentlyFilled = heartIcon.src.includes("vector-heard-like.svg");

    // Если оно было заполнено, делаем пустым, если пустое - делаем заполненным
    if (isCurrentlyFilled) {
        heartIcon.src = "imajes/vector-heard.svg"; // Пустое сердечко
        localStorage.setItem("heartState", "false"); // Сохраняем состояние как пустое
    } else {
        heartIcon.src = "imajes/vector-heard-like.svg"; // Заполненное сердечко
        localStorage.setItem("heartState", "true"); // Сохраняем состояние как заполненное
    }
});


