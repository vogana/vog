// 护眼模式
document.addEventListener("DOMContentLoaded", function () {
    const changeColorBtn = document.getElementById("changeColorBtn");
    const body = document.body;

    changeColorBtn.addEventListener("click", changeBackgroundColor);

    function changeBackgroundColor() {
        const colors = [
            "#FFFFFF", 
            "#C7EDCC", 
            "#6E7B6C"
        ]; // 减少颜色数量
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        
        // 背景颜色过渡效果
        body.style.transition = "background-color 0.5s ease-in-out";
        
        body.style.backgroundColor = randomColor;
    }
});
