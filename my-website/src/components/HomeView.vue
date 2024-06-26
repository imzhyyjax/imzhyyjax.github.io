<template>
  <div class="home">
    <div class="profile-container">
      <img src="@/assets/profile.jpg" alt="Profile Photo" class="profile-photo">
      <div class="profile-info">
        <h1>Hello</h1>
        <p class="about-title">A Bit About Me</p>
        <p class="about-description">I'm a paragraph. Click here to add your own text and edit me.</p>
        <div class="buttons">
          <router-link to="/resume" class="button">Resume</router-link>
          <router-link to="/projects" class="button">Projects</router-link>
          <router-link to="/contact" class="button">Contact</router-link>
        </div>
      </div>
    </div>
    <footer class="footer">
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
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.profile-container {
  display: flex;
  align-items: center;  /* 垂直居中对齐 */
  justify-content: center;  /* 水平居中对齐 */
  text-align: left;  /* 让文本左对齐 */
  margin-top: 250px; /* 调整顶部距离 */
}

.profile-photo {
  width: 480px;
  height: 480px;
  object-fit: cover; /* 保持图片比例，裁剪溢出部分 */
  border-radius: 50%; /* 圆形图片 */
  margin-right: 20px; /* 图片和文字之间的间距 */
}

.profile-info {
  display: flex;
  flex-direction: column;  /* 让内容垂直对齐 */
  justify-content: flex-start;
}

.about-title {
  font-size: 24px;
  margin-top: 10px;
}

.about-description {
  font-size: 16px;
  color: #666;
  margin: 10px 0;
}

.buttons {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.button {
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #f1f1f1;
  text-decoration: none;
  color: black;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #ccc;
}

.footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
  margin-top: 250px;
  position: relative;
}

.footer::before {
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
</style>
