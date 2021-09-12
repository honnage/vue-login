<template>
  <!-- <div class="contentBx"> -->
  <div class="nav">
    <router-link to="/">Home</router-link>
    <a href="">tet</a>

    <a v-on:click="logout" href="">Logout</a>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "header",
  methods: {
    logout() {
      console.warn("logout");
      localStorage.clear();
      this.$router.push({ name: "SignIn" });
    },
  },
};
</script>
<style>
.nav {
  background-color: #333;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #fff;
  padding: 20px 20px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  /* background: #ddd; */
  color: rgb(199, 199, 199);
}
</style>
