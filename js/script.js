// 返回顶部按钮
const backToTopBtn = document.getElementById("backToTopBtn");

// 初始化按钮的显示状态
backToTopBtn.style.display = "none";

// 监听页面滚动事件
window.addEventListener("scroll", toggleBackToTopButton);

// 点击按钮返回顶部
backToTopBtn.addEventListener("click", scrollToTop);

// 滚动时根据滚动条位置显示/隐藏按钮
function toggleBackToTopButton() {
    if (window.scrollY > 1000) {
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




// 海报图片
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll('.carousel img').length;

  function showSlide(n) {
    const slides = document.querySelectorAll('.carousel img');
    const contents = document.querySelectorAll('.carousel-content');
    const imageWrappers = document.querySelectorAll('.image-wrapper');

    // 处理索引超出边界的情况
    currentSlide = (n + totalSlides) % totalSlides;

    // 隐藏前一个图片和文本内容
    slides.forEach(slide => slide.style.opacity = 0); 
    contents.forEach(content => content.style.display = 'none'); 

    // 显示当前图片和文本内容
    slides[currentSlide].style.opacity = 1;
    contents[currentSlide].style.display = 'block'; 
    
    // 显示当前背景图片并隐藏其他背景图片
    imageWrappers.forEach((wrapper, index) => {
      if (index === currentSlide) {
        wrapper.style.display = 'block';
      } else {
        wrapper.style.display = 'none';
      }
    });
  }
  
  function changeSlide(n) {
    showSlide(currentSlide + n);
  }
  
  function autoSlide() {
    changeSlide(1); // 切换到下一张图片
    setTimeout(autoSlide, 10000); // 3秒后再次自动切换
  }
  
  window.onload = function() {
    showSlide(currentSlide); // 首次加载显示第一张图片
    autoSlide(); // 页面加载后开始自动切换
  };
