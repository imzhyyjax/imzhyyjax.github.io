<template>
  <div class="resume-container">
    <h1 class="resume-title">Resume</h1> <!-- Resume 标题放在这里 -->

    <!-- Education 部分 -->
    <div class="resume-content">
      <div class="resume-left">
        <h2>Education</h2>
      </div>
      <div class="resume-right">
        <div class="job-item">
          <p class="job-date">2023 - 2025</p>
          <div class="job-info">
            <h3 class="job-title">Macao Polytechnic University |<br> Master's Degree</h3>
            <p>Master of Science in Big Data and Internet of Things</p>
          </div>
        </div>
        <div class="job-item">
          <p class="job-date">2019 - 2023</p>
          <div class="job-info">
            <h3 class="job-title">Suzhou City University |<br> Bachelor's Degree</h3>
            <p>Bachelor of Engineering in Computer Science and Technology</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills 部分 -->
    <div class="resume-content">
      <div class="resume-left">
        <h2>Skills & <br> Expertise</h2>
      </div>
      <div class="resume-right">
        <ul class="skills-list">
          <li>Programming Languages: Python, JavaScript, C++</li>
          <li>Frameworks: Vue.js, Django, Flask</li>
          <li>Tools: Git, Docker, Jenkins</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumePage',
}
</script>

<style scoped>
.resume-container {
  padding: 20px;
  width: 80%;
  margin: 0 auto; /* 保证内容居中 */
  margin-top: 50px;
}

.resume-title {
  text-align: left;
  font-size: 2.5em;
  margin-bottom: 40px; /* 确保标题下方有足够空隙 */
  margin-top: 40px;
}

.resume-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.resume-left {
  width: 25%;
  text-align: right;
  padding-right: 20px;
}

.resume-right {
  width: 70%; /* 设置宽度与job-info一致 */
}

.job-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.job-date {
  width: 20%;
  color: gray;
  text-align: right;
  margin-top: 25px;
}

.job-info {
  width: 75%;
  padding-left: 20px;
  margin-top: 5px;
}

.job-title {
  font-weight: bold;
}

/* Skills 列表样式 */
.skills-list {
  list-style-type: none;
  padding-left: 20px; /* 保持与 job-info 的对齐 */
  margin-left: 195px;
  margin-top: 23px;
  width: 75%; /* 设置与 job-info 一致的宽度 */
}

.skills-list li {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
