const backToTopBtn = document.getElementById("backToTopBtn");

// 初始化按钮的显示状态
backToTopBtn.style.display = "none";

// 监听页面滚动事件
window.addEventListener("scroll", toggleBackToTopButton);

// 点击按钮返回顶部
backToTopBtn.addEventListener("click", scrollToTop);

// 滚动时根据滚动条位置显示/隐藏按钮
function toggleBackToTopButton() {
    if (window.scrollY > 0) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// 平滑滚动到顶部的函数
function scrollToTop() {
    const scrollDuration = 300; // 滚动持续时间，以毫秒为单位
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
