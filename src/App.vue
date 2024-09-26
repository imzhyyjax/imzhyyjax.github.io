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
        <router-link to="/projects" class="nav-link">Projects</router-link>
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
      <div class="footer-item">
        <p class="footer-title">Follow Me</p>
        <div class="social-media">
          <a href="https://github.com/imzhyyjax" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://www.linkedin.com/in/%E4%BD%95%E5%A5%95%E5%A5%95-%E6%9C%B1-295a32158" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </div>
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
  padding: 0px 60px; /* Adjust padding to your preference */
  margin-top: 25px; /* Ensure no margin at the top */
  margin-bottom: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: none;
  position: absolute; /* Or use fixed if you want it always on top */
  top: 0;
  z-index: 1000;
}
.header-left {
  display: flex;
  align-items: center;
  margin-left: 0px;
}
.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit; /* 保证链接和原始文字颜色一致 */
}

.home-link:hover {
  text-decoration: none; /* 悬停时添加下划线效果 */
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #f4a300; /* Orange color */
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
  text-decoration: underline;
}
.header-nav {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.header-nav .router-link {
  text-decoration: none;
  color: black;
  margin: 0 10px; /* 为了让链接之间有适当的空隙 */
  transition: color 0.3s ease;
  cursor: pointer;
}
.header-nav .router-link,
.header-nav .router-link:visited,
.header-nav .router-link:active,
.header-nav .router-link:focus,
.header-nav .router-link:hover {
  text-decoration: none !important; /* 确保所有状态下没有下划线 */
  color: black; /* 正常颜色 */
  transition: color 0.3s ease; /* 平滑的颜色过渡 */
}

.header-nav .router-link:hover {
  color: #b5854c; /* 悬停时的颜色 */
}
.header-nav .divider {
  margin: 0 2px;
  color: #333;
}
.nav-link {
  text-decoration: none !important;
  color: black;
  margin: 0 10px;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #b5854c;
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
  width: 80%; /* 调整为你想要的宽度 */
  border-top: 1px solid #ccc; /* 灰色的顶部边框 */
}


.footer-item {
  text-align: left;
  margin: 12px 0; /* 增加项之间的间距 */
}

.footer-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.social-media a {
  margin:0 1.55px;
  color: #333;
  text-decoration: none;
  font-size: 21px; /* 调整图标大小 */
}

.social-media a:hover {
  text-decoration: underline;
}

html {
  scroll-behavior: smooth;
}

</style>
