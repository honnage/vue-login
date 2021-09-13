<template>
  <Header />
  <div v-if="dataAPI">
    <div class="container my-4">
      <h1>Hello {{ dataAPI.data.role }}</h1>
      <p><b>role :</b> {{ dataAPI.data.role }}</p>
      <p><b>token :</b> {{ dataAPI.data.token }}</p>
      <p></p>

      <p><b>data all from API by JSON localStorage</b></p>
      {{ dataAuthorization }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  dataAPI: "Home",
  data() {
    return {
      dataAPI: "",
      dataAuthorization: "",
    };
  },
  components: {
    Header,
  },
  mounted() {
    let dataAPI = localStorage.getItem("user-info");
    let token = localStorage.getItem("token");

    let apiURL = "http://api.teedev.online/api/v1/user";
    axios
      .get(apiURL, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        // console.warn("Authorization", res.data);
        this.dataAuthorization = res.data;
        console.warn("dataAuthorization", this.dataAuthorization);
      })
      .catch((error) => {
        console.log(error);
      });

    // alert("sign-up done");
    // console.warn(dataAPI);
    // console.warn("token " + token);
    this.dataAPI = JSON.parse(dataAPI);
    if (!dataAPI) {
      this.$router.push({ name: "SignIn" });
    }
  },
};
</script>
<style></style>
