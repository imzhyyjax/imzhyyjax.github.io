<template>
  <div class="home">
    <h1>Welcome to My Portfolio</h1>
    <p>This is a paragraph about me.</p>
    <button @click="goToProjects">View My Projects</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToProjects() {
      this.$router.push('/projects');
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
