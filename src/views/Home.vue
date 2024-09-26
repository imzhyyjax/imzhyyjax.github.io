<template>
  <div class="profile-container">
      <img src="@/assets/coat.jpg" alt="Profile Photo" class="profile-photo">
      <div class="profile-info">
        <p class="hello">Hello,</p>
        <p class="about-title">A Bit About Me</p>
        <p class="about-description">Hi, I’m Jax, a second-year master’s student specializing in Natural Language Processing(NLP). I’m actively seeking PhD positions or job opportunities to further my research and career in this exciting field.</p>
        <div class="buttons">
          <router-link to="/resume" class="button">Resume</router-link>
          <router-link to="/projects" class="button">Projects</router-link>
          <router-link to="/contact" class="button">Contact</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: 0;
}
.profile-container {
  display: flex;
  align-items: center;  /* 垂直居中对齐 */
  justify-content: center;  /* 水平居中对齐 */
  text-align: left;  /* 让文本左对齐 */
  margin-top: 130px; /* 调整顶部距离 */
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
  font-size: 16px; /* 字体大小 */
}

.profile-info h1 {
  font-family: 'Arial', sans-serif;
  font-size: 100px;
  font-weight: bold;
  color: #333333;
}
.hello{
  font-weight: bolder;
  font-size: 90px;
  margin-top: 0;
}
.about-title {
  font-size: 24px;
  margin-top: 0;
  margin-left: 6.5px;
  font-weight: bold;
}

.about-description {
  font-size: 16px;
  color: #666;
  margin: 10px 0;
  max-width: 400px;
  text-align: justify; /* 两端对齐，可以换成 text-align: left 或 center */
  line-height: 1.4;   /* 行间距 */
  margin-left: 6.5px;
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
</style>
