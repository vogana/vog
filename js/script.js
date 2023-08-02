// 获取返回顶部按钮元素
const backToTopBtn = document.getElementById("backToTopBtn");

// 绑定按钮点击事件
backToTopBtn.addEventListener("click", function() {
    // 使用smooth滚动到顶部
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
