// 在 main.js 文件中，您可以导入共享的页头和页脚内容
import { headerContent } from 'header.js';
import { footerContent } from 'footer.js';

// 在页面加载完成后，将页头和页脚内容插入到相应位置
document.addEventListener('DOMContentLoaded', function () {
  // 插入页头内容
  const headerElement = document.querySelector('header');
  if (headerElement) {
    headerElement.innerHTML = headerContent;
  }

  // 插入页脚内容
  const footerElement = document.querySelector('footer');
  if (footerElement) {
    footerElement.innerHTML = footerContent;
  }
});
