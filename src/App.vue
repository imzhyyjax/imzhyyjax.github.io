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

/* 针对屏幕宽度小于 768px 的移动设备 */
@media screen and (max-width: 768px) {
  header {
    flex-direction: column; /* 导航栏和标题垂直排列 */
    padding: 10px; /* 调整内边距 */
  }

  .header-left, .header-nav {
    flex-direction: column; /* 导航栏和左侧标题垂直排列 */
    align-items: center;
  }

  footer {
    flex-direction: column; /* 让页脚在小屏幕下垂直排列 */
    align-items: center;
    padding: 10px;
  }
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

img {
  max-width: 100%; /* 确保图片不会超出父容器的宽度 */
  height: auto;    /* 自动调整图片的高度，保持图片的比例 */
  display: block;  /* 让图片成为块级元素，避免图片下面有不必要的间隙 */
  border-radius: 50%; /* 使图片保持圆形 */
  object-fit: cover; /* 保持图片内容适应容器 */
}

/* 针对屏幕宽度小于 768px 的设备 */
@media screen and (max-width: 768px) {
  img {
    max-width: 90%;  /* 图片在小屏幕时最大宽度为90% */
    margin: 0 auto;  /* 让图片居中 */
    border-radius: 50%; /* 确保图片仍然是圆形 */
  }
}


html {
  scroll-behavior: smooth;
}
</style>
