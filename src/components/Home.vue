<template>
  <Header />
  <div v-if="dataAPI">
    <div class="container my-4">
      <h1>Hello {{ dataAPI.data.role }}</h1>
       <p><b>role :</b> {{dataAPI.data.role}}</p>
      <p><b>token :</b> {{dataAPI.data.token}}</p>
      <p></p>

      <p><b>data all from API by JSON localStorage</b></p>
      {{ dataAPI }}
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";

export default {
  dataAPI: "Home",
  data() {
    return {
      dataAPI: "",
    };
  },
  components: {
    Header,
  },
  mounted() {
    let dataAPI = localStorage.getItem("user-info");
    console.warn(dataAPI);

    this.dataAPI = JSON.parse(dataAPI);
    if (!dataAPI) {
      this.$router.push({ name: "SignIn" });
    }
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
