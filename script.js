document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu');

    // 点击菜单图标时切换菜单的显示状态
    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // 点击页面其他地方时关闭菜单
    document.addEventListener('click', function(event) {
        var target = event.target;
        // 如果点击目标不是菜单或菜单图标，则关闭菜单
        if (!target.closest('.menu') && !target.closest('.menu-icon')) {
            menu.classList.remove('show');
        }
    });
});

// 獲取 main_img 容器
const mainImgContainer = document.querySelector('.main_img');

// 獲取所有圖片容器
const imageContainers = document.querySelectorAll('.walking-container, .stamp, .pachinnko-container, .ikimono-container, .cut-container, .comic1 , .comic2 , .babo-container, .light-container');

// 將所有圖片容器轉換為陣列
const imageContainersArray = Array.from(imageContainers);

// 隨機排列圖片容器
imageContainersArray.sort(() => Math.random() - 0.5);

// 將隨機排列後的圖片容器插入 main_img 容器中
imageContainersArray.forEach(container => {
    mainImgContainer.appendChild(container);
});
