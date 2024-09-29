<template>
  <div class="resume-container">
    <h1 class="resume-title">Publication</h1> <!-- Resume 标题放在这里 -->

    <div class="resume-content">
      <div class="resume-left">
        <h2>Work Experience</h2>
      </div>
      <div class="resume-right">
        <div class="job-item">
          <p class="job-date">test</p>
          <div class="job-info">
            <h3 class="job-title">test</h3>
            <p>test</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
export default {
  name: 'PublicationPage',
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
  width: 70%;
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
}

.job-info {
  width: 75%;
  padding-left: 20px;
}

.job-title {
  font-weight: bold;
}

.education-section {
  margin-top: 50px;
}

.education-section .job-item {
  display: flex;
  justify-content: space-between;
}

.education-section .job-date {
  width: 20%;
  color: gray;
  text-align: right;
}

.education-section .job-info {
  width: 75%;
  padding-left: 20px;
}


</style>
