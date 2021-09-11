<template>
  <h1>Sign In</h1>
  <div class="sign-in">
    <input type="text" v-model="username" placeholder="Enter Username" />
    <input type="text" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signIn">Sign In</button>
    <p>
      <router-link to="/Sign-up">Sing Up</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      let result = await axios.get(
        `http://localhost:3000/users?username=${this.username}&password=${this.password}`
      );
      console.warn(result);

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    }
  },
    mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sign-in input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.sign-in button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
}
</style>
