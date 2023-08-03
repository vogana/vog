// 获取返回顶部按钮元素
const backToTopBtn = document.getElementById("backToTopBtn");

// 绑定按钮点击事件
backToTopBtn.addEventListener("click", scrollToTop);

// 滚动到顶部的函数
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