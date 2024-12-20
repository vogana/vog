// 头部内容
const headerContent = `
<div class="header">
  <div class="navbar">
    <div class="logo"> <img src="images/opo.svg" alt="Logo"width="40" height="40"> <span class="logo-text">服装CAD制版</span> </div>
    <div class="menu-icon" onclick="toggleNav()">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
        <path d="M1 4.5A1.5 1.5 0 0 1 2.5 3h11A1.5 1.5 0 0 1 15 4.5h-14zm0 5A1.5 1.5 0 0 1 2.5 8h11A1.5 1.5 0 0 1 15 9.5h-14zm0 5A1.5 1.5 0 0 1 2.5 13h11A1.5 1.5 0 0 1 15 14.5h-14z"/>
      </svg>
    </div>
    <ul class="nav-links" id="navLinks">
      <li><a class="dropdown-item" href="index.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #eb6d6e;" class="bi bi-house-fill" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
        </svg>
        首页</a></li>
      <li><a class="dropdown-item" href="spwy.html" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #eb6d6e;" class="bi bi-camera-reels-fill" viewBox="0 0 16 16">
          <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
        </svg>
        自媒体</a></li>
      <li><a class="dropdown-item" href="fuwu.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #eb6d6e;" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
        </svg>
        服务</a></li>
      <li><a class="dropdown-item" href="lianxi.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #eb6d6e;" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        联系我</a></li>
    </ul>
  </div>
</div>

`;

// 页脚内容
const footerContent = `
<div class="footer">
  <div class="desktop-content">2023 ANNAZI版权所有 cctv92@126.com </div>
  <div class="mobile-content">
    <footer class="footer">
      <nav class="footer-menu">
        <ul class="menu-list">
          <li><a href="spwy.html" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #eb6d6e;" class="bi bi-camera-reels-fill" viewBox="0 0 16 16">
              <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
            </svg>
            自媒体</a></li>
          <li><a href="fuwu.html" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #eb6d6e;" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
            </svg>
            服务</a></li>
          <li><a href="lianxi.html" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #eb6d6e;" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            联系我</a></li>
        </ul>
      </nav>
    </footer>
  </div>
</div>
`;

// head 部分内容
const headContent = `
  <meta name="baidu-site-verification" content="codeva-KLHMw5vGRp" />
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>服装CAD制版</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <link rel="icon" type="image/png" href="images/favicon.png">
  <meta name="description" content="欢迎来到我们的服装制版世界！探索着数字化时尚的无限可能，从CAD服装设计到智能制版，再到材料创新，我们为您呈现一场前沿的时尚科技盛宴。深入了解服装制版工艺，从模式分级到纸样调整，从制版软件比较到制版误差分析，我们为您提供了全方位、多角度的解析，助您掌握服装制版的核心精髓。我们将探讨数字化制版对生产效率和可持续时尚的深远影响，带您领略时尚与技术的完美交融。加入我们，参与智能时尚科技的革命，掌握未来服装技术创新的领先地位，引领时尚制版的全新时代。让我们共同塑造一个更加精彩的时尚明天！www.foooz.link ">
  <meta name="keywords" content="服装制版,裤子制版,西装制版,大衣制版,风衣制版,服装技术,CAD制版,服装3D,服装打样,样衣打样,服装工艺,服装版师,服装设计师,服装导航,服装产品,服装交互设计师,pca.us.kg ">
  <meta name="author" content="服装制版">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="服装制版,裤子制版,西装制版,大衣制版,风衣制版,服装技术,CAD制版,服装3D,服装打样,样衣打样,服装工艺,服装版师,服装设计师,服装导航,服装产品,服装交互设计师,pca.us.kg">
  <meta property="og:description" content="欢迎来到我们的服装制版世界！探索着数字化时尚的无限可能，从CAD服装设计到智能制版，再到材料创新，我们为您呈现一场前沿的时尚科技盛宴。深入了解服装制版工艺，从模式分级到纸样调整，从制版软件比较到制版误差分析，我们为您提供了全方位、多角度的解析，助您掌握服装制版的核心精髓。我们将探讨数字化制版对生产效率和可持续时尚的深远影响，带您领略时尚与技术的完美交融。加入我们，参与智能时尚科技的革命，掌握未来服装技术创新的领先地位，引领时尚制版的全新时代。让我们共同塑造一个更加精彩的时尚明天！">
  <meta property="og:image" content="https://pca.us.kg/images/favicon.png">
  <meta property="og:url" content="https://pca.us.kg/">
  <meta property="og:type" content="article">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="服装制版,裤子制版,西装制版,大衣制版,风衣制版,服装技术,CAD制版,服装3D,服装打样,样衣打样,服装工艺,服装版师,服装设计师,服装导航,服装产品,服装交互设计师,pca.us.kg">
  <meta name="twitter:description" content="欢迎来到我们的服装制版世界！探索着数字化时尚的无限可能，从CAD服装设计到智能制版，再到材料创新，我们为您呈现一场前沿的时尚科技盛宴。深入了解服装制版工艺，从模式分级到纸样调整，从制版软件比较到制版误差分析，我们为您提供了全方位、多角度的解析，助您掌握服装制版的核心精髓。我们将探讨数字化制版对生产效率和可持续时尚的深远影响，带您领略时尚与技术的完美交融。加入我们，参与智能时尚科技的革命，掌握未来服装技术创新的领先地位，引领时尚制版的全新时代。让我们共同塑造一个更加精彩的时尚明天！www.foooz.link ">
  <meta name="twitter:image" content="https://pca.us.kg/images/favicon.png">
  <meta name="googlebot" content="noindex">
  <meta name="googlebot-news" content="nosnippet">
  <meta name="geo.placename" content="浙江、宁波">
`;

// 在页面加载时插入内容
document.addEventListener('DOMContentLoaded', function () {
  // 插入 head 内容
  const headElement = document.querySelector('head');
  if (headElement) {
    headElement.insertAdjacentHTML('beforeend', headContent);  // 使用 insertAdjacentHTML 插入
  }

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
