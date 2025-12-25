document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu');


    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });


    document.addEventListener('click', function (event) {
        var target = event.target;

        if (!target.closest('.menu') && !target.closest('.menu-icon')) {
            menu.classList.remove('show');
        }
    });
});

// 獲取 main_img 容器
const mainImgContainer = document.querySelector('.main_img');

// 獲取所有圖片容器
const imageContainers = document.querySelectorAll('.walking-container, .stamp, .pachinnko-container, .ikimono-container, .cut-container, .comic1 , .comic2 , .babo-container, .light-container,.award-container1,.award-container2,.container3,.container4,.container5');

// 將所有圖片容器轉換為陣列
const imageContainersArray = Array.from(imageContainers);

// 隨機排列圖片容器
imageContainersArray.sort(() => Math.random() - 0.5);

// 將隨機排列後的圖片容器插入 main_img 容器中
imageContainersArray.forEach(container => {
    mainImgContainer.appendChild(container);
});
