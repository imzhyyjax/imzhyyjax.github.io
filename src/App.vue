<template>
  <div id="app">
    <header>
      <div class="header-left">
        <!-- 将所有内容放在 <router-link> 内，点击整个区域可以回到首页 -->
        <router-link to="/" class="home-link">
          <span class="dot"></span>
          <span class="name">Jax Zhu</span>
          <span class="title">Developer</span>
        </router-link>
      </div>
      <nav class="header-nav">
        <router-link to="/resume" class="nav-link">Resume</router-link>
        <span class="divider">|</span>
        <router-link to="/publication" class="nav-link">Publication</router-link>
        <span class="divider">|</span>
        <!-- Contact 链接指向锚点 -->
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
    </header>

    <router-view />

    <footer id="contact">
      <div class="footer-item">
        <p class="footer-title">Phone</p>
        <p>+853 6891 0274</p>
        <p>+86 177 6596 0274</p>
      </div>
      <div class="footer-item">
        <p class="footer-title">WeChat</p>
        <p>imzhyyjax</p>
      </div>
      <div class="footer-item">
        <p class="footer-title">Email</p>
        <p>heyiyizhu@gmail.com</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* 全局内容宽度设置 */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
}
* {
  box-sizing: border-box;
}
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}


header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px; /* 调整内边距 */
  margin-top: 25px;
  margin-bottom: 0;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  z-index: 1000;
}
.header-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0px;
}

.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.home-link:hover {
  text-decoration: none;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #f4a300;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 1.5px;
}
.name {
  font-weight: bold;
  font-size: 20px;
  margin-right: 5px;
}
.title {
  font-size: 18px;
  color: #777;
}
.header-nav a {
  margin: 0 15px;
  text-decoration: none;
  color: black;
  font-size: 16px;
}
.header-nav a:hover {
  color: #b5854c; /* 鼠标悬停时的颜色变化 */
  text-decoration: none;
}
.header-nav {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.header-nav .router-link {
  text-decoration: none;
  color: black;
  margin: 0 10px;
  transition: color 0.3s ease;
  cursor: pointer;
}
.header-nav .router-link:hover {
  color: #b5854c;
}
.header-nav .divider {
  margin: 0 2px;
  color: #333;
}

footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
  margin-top: 250px;
  position: relative;
}

footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  border-top: 1px solid #ccc;
}

.footer-item {
  text-align: left;
  margin: 12px 0;
}

.footer-title {
  font-weight: bold;
  margin-bottom: 5px;
}

/* 针对屏幕宽度小于 768px 的设备 */
@media screen and (max-width: 768px) {
  header {
    flex-direction: row; /* 保持水平排列 */
    padding: 0 30px; /* 减小左右的内边距，让布局更加紧凑 */
  }
  .header-left {
    margin-left: 0px;
  }
  .name {
    font-size: 14px; /* 调整字体大小 */
  }
  .title {
    font-size: 12px; /* 调整副标题字体大小 */
  }
  .header-nav a {
    margin: 0 8px; /* 缩小导航链接之间的间距 */
    font-size: 12px; /* 缩小导航链接的字体 */
  }
  .dot {
    width: 8px;
    height: 8px;
    margin-right: 5px;
  }
  footer {
    padding: 10px 0; /* 减少页脚的内边距 */
    font-size: 8px;
  }
  .footer-item {
    margin: 8px 0; /* 缩小页脚元素的间距 */
  }
}

html {
  scroll-behavior: smooth;
}

header, footer {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box; /* 确保内边距不会影响宽度 */
}

</style>