<template>
  <h1>Hello {{ name }} User, Welcome on Home Page</h1>
</template>
<script>
// import axios from "axios";
export default {
  name: "Home",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
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
