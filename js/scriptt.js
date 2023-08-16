// 获取切换按钮和面板元素
const toggleBtn = document.getElementById('toggleBtn');
const panel = document.getElementById('panel');

let autoOpenExecuted = false; // 标识是否已执行自动打开功能

// 添加点击按钮事件监听器
toggleBtn.addEventListener('click', () => {
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    toggleBtn.style.right = 'calc(150px)';
  } else {
    panel.style.display = 'none';
    toggleBtn.style.right = 'calc(5px)';
  }
});

// 添加鼠标进入按钮的事件监听器
toggleBtn.addEventListener('mouseenter', () => {
  panel.style.display = 'block';
  toggleBtn.style.right = 'calc(150px)';
  if (!autoOpenExecuted) {
    clearTimeout(autoOpenTimeoutId); // 清除定时器
  }
});

// 添加鼠标离开按钮的事件监听器
toggleBtn.addEventListener('mouseleave', () => {
  if (panel.style.display !== 'block') {
    panel.style.display = 'none';
    toggleBtn.style.right = 'calc(5px)';
    if (!autoOpenExecuted) {
      setAutoOpenTimer(); // 设置自动打开计时器
    }
  }
});

// 辅助函数：设置自动打开计时器
function setAutoOpenTimer() {
  autoOpenExecuted = true;
  const autoOpenTimeoutId = setTimeout(() => {
    panel.style.display = 'block';
    toggleBtn.style.right = 'calc(150px)';
  }, 10000); // 10秒后自动打开面板
}

// 初始化：设置自动打开计时器
setAutoOpenTimer();
