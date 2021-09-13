<template>
  <!-- <div class="contentBx"> -->
  <div class="nav">
    <router-link to="/Covid19-thailand">COVID-19 Thailand</router-link>
    <!-- <router-link to="/">Home</router-link> -->

    <div v-if="dataAPI == null">
      <router-link to="/Sign-in">Login</router-link>
    </div>

    <div v-if="dataAPI">
      <a v-on:click="logout" href="">Logout</a>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "header",
  data() {
    return {
      dataAPI: "",
    };
  },

  methods: {
    logout() {
      console.warn("logout");
      localStorage.clear();
      this.$router.push({ name: "SignIn" });
    },
  },
  mounted() {
    let dataAPI = localStorage.getItem("user-info");
    // console.warn(dataAPI);

    this.dataAPI = JSON.parse(dataAPI);
    // if (!dataAPI) {
    //   this.$router.push({ name: "SignIn" });
    // }
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
