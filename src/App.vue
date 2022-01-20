<template>
  <div class="container">
    <NavBar title="Team Sign up" />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  color: #000000;
  background: #ffffff;
  min-height: 100vh;
  width: 680px;

  border-radius: 20px;
  padding: 15px 65px;

  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 1;
}

input {
  border-radius: 4px;
  border: 0.8px solid #DDDDDD;
  padding: 15px 10px;
  margin-bottom: 15px;
}
</style>
