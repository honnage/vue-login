<template>
  <Header />
  <h1>Hello {{ name }} User, Welcome on Home Page</h1>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
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
