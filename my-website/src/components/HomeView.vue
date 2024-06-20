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
      <p>Phone: 123-456-7890</p>
      <p>Email: info@mysite.com</p>
      <div class="social-media">
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://twitter.com">Twitter</a>
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
  margin-top: 50px; /* 调整顶部距离 */
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
  margin-top: 40px;
  font-size: 14px;
  color: #777;
}

.social-media a {
  margin: 0 10px;
  color: #333;
  text-decoration: none;
}

.social-media a:hover {
  text-decoration: underline;
}
</style>
