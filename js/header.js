// header.js
export const headerContent = `
  <header>

<div class="header">
  <div class="navbar">
    <div class="logo"> <img src="images/opo.svg" alt="Logo"width="40" height="40"> <span class="logo-text">宁波服装制版工作室</span> </div>
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
  </header>
`;
