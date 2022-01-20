<template>
  <div class="hello">
    <h1 class="main_title">{{ title }}</h1>
    <ul class="navList" v-bind:class="[this.$route.path === '/resume' ? 'hidden' : 'bar']">
      <router-link to="/"><li class="crumb" v-bind:class="[this.$route.path === '/' || this.$route.path === '/personal' ? 'purple' : 'crumb']">Personal</li></router-link>
      <router-link to="/social"><li class="crumb" v-bind:class="[this.$route.path === '/social' ? 'purple' : 'crumb']">Social</li></router-link>
      <router-link to="/certificates"><li class="crumb" v-bind:class="[this.$route.path === '/certificates' ? 'purple' : 'crumb']">Certificates</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
  display: none;
}
ul {
  list-style-type: none;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 33.3333%);
  text-align: center;
  margin: -10px 0 30px;
}

.crumb {
  border-bottom: 2px solid #B8B8B8;
  padding-bottom: 15px;
}
.purple {
  border-bottom: 3px solid #660099;
  color: #660099 !important;
  padding-bottom: 15px;
  width: 100%;
}

a {
  color: #000000;
  text-decoration: none;
}

.main_title {
  font-size: 36px;
  font-weight: normal;
  line-height: 1.8;
  letter-spacing: -1.5px;
  text-align: left;
}
</style>
