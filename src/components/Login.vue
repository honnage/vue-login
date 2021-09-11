<template>
  <!-- <div class="container"> -->
  <div class="login">
    <h1>Login</h1>

    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <data>
      <div class="txt_field">
        <input type="text" v-model="userName" required />
        <span></span>
        <label>Username</label>
      </div>
      <div class="txt_field">
        <input type="password" v-model="passWord" required />
        <span></span>
        <label>Pasword</label>
      </div>
      <div class="pass">Forgot Password</div>
      <input type="submit" v-on:click="Login" value="Login" />
      <div class="signup_link">Not a member <a href="">Signup</a></div>
    </data>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      passWord: "",
      error: "",
    };
  },
  methods: {
    async Login() {
      //   console.warn(this.userName, this.passWord);

      let result = await axios.post(
        `http://api.teedev.online/api/v1/user/login`,
        {
          userName: this.userName,
          passWord: this.passWord,
        }
      );
      console.warn(result.data);

      if (result.data.success == true) {
        // localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        // this.$router.push({ name: "Home" });
      } else {
        console.warn(result.data.errorCode);
        this.error = result.data.errorText;
      }
    },
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
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(120deg, #eef8ff, #afd1fd);
  height: 100vh;
  overflow: hidden;
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background: white;
  border-radius: 25px;
}
.login h1 {
  text-align: center;
  margin-top: 25px;
  padding: 0 0 20px 0;
  border-bottom: 1px solid silver;
}
.login data {
  /* padding: 0 5px; */
  box-shadow: border-box;
}
data .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.txt_field label {
  position: absolute;
  top: 50%;
  left: 60px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: 0.5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #2691d9;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}
.pass {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}
.pass:hover {
  text-decoration: underline;
}
input[type="submit"] {
  width: 80%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}
input[type="submit"]:hover {
  border-color: #2691d9;
  transition: 0.5s;
}
.signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signup_link a {
  color: #2691d9;
  text-decoration: none;
}
.signup_link a:hover {
  text-decoration: underline;
}
</style>
