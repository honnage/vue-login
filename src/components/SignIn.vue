<template>
  <Header />
  <section>
    <div class="imgBx">
      <img src="../assets/img/log.svg" />
    </div>
    <div class="contentBx">
      <div class="formBx">
       <center> <h1 >Login</h1></center>
        <div v-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
        <!-- <form> -->
        <div class="inputBx">
          <span>Username </span>
          <input type="text" v-model="userName" required />
        </div>
        <div class="inputBx">
          <span>Password </span>
          <input type="password" v-model="passWord" required />
        </div>
        <div class="remember">
          <label><input type="checkbox" name="" /> Remember me</label>
        </div>
        <div class="inputBx">
          <input type="submit" v-on:click="SignIn" value="Sign in" />
        </div>
        <div class="inputBx">
          <p>Don't have an account? <a href="">Sign up</a></p>
        </div>
        <!-- </form> -->

        <!-- <h3>Login with social media</h3>
        <ul class="sci">
          <li><i class="fab fa-facebook-f"></i></li>
          <li><i class="fab fa-twitter"></i></li>
          <li><i class="fab fa-instagram"></i></li>
        </ul> -->
      </div>
    </div>
  </section>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "SignIn",
  components: {
    Header,
  },
  data() {
    return {
      userName: "",
      passWord: "",
      error: "",
    };
  },
  methods: {
    async SignIn() {
      const result = await axios.post(
        `http://api.teedev.online/api/v1/user/login`,
        {
          userName: this.userName,
          passWord: this.passWord,
        }
      );

      if (result.data.success == true) {
        console.warn(result.data);
        console.warn(result);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user-info", JSON.stringify(result));

        console.warn(result.data.token);
        // console.warn(result.data.role);
        this.$router.push({ name: "Home" });
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  padding: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  
}

section .imgBx {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
}

section .imgBx:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  background: linear-gradient(225deg, #e91e63, #03a9f4);
  z-index: 1;
  mix-blend-mode: screen;
}

section .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  object-fit: cover;
}

section .contentBx {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 90vh;
}

section .contentBx .formBx {
  width: 50%;
}

section .contentBx .formBx h1 {
  color: #607d8b;
  /* text-align: center; */
  font-weight: 600;
  font-size: 2.5em;
  text-transform: uppercase;
  margin-bottom: 20px;
  border-bottom: 4px solid #ff4584;
  display: inline-block;
  letter-spacing: 1px;
}

section .contentBx .formBx .inputBx {
  margin-bottom: 20px;
}

section .contentBx .formBx .inputBx span {
  font-size: 16px;
  margin-bottom: 5px;
  display: inline-block;
  color: #607d8b;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
}

section .contentBx .formBx .inputBx input {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  font-weight: 400;
  border: 1px solid #607d8b;
  font-size: 16px;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 30px;
}

section .contentBx .formBx .inputBx input[type="submit"] {
  background: #4845ff;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
}

section .contentBx .formBx .inputBx input[type="submit"]:hover {
  background: #368ff5;
}

section .contentBx .formBx .remember {
  margin-bottom: 10px;
  color: #607d8b;
  font-weight: 400;
  font-size: 14px;
}

section .contentBx .formBx p {
  color: #607d8b;
}

section .contentBx .formBx p a {
  color: #ff4584;
}

section .contentBx .formBx h3 {
  color: #607d8b;
  text-align: center;
  margin: 80px 0 10px;
  font-weight: 500;
}

section .contentBx .formBx .sci {
  display: flex;
  justify-content: center;
  align-items: center;
}

section .contentBx .formBx .sci li {
  list-style: none;
  width: 50px;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #607d8b;
  border-radius: 50px;
  margin: 0 16px;
  cursor: pointer;
}

section .contentBx .formBx .sci li:hover {
  background: #ff4584;
}

section .contentBx .formBx .sci li img {
  transform: scale(1);
  filter: invert(1);
}

section .contentBx .formBx .sci li i {
  transform: scale(2);
  filter: invert(1);
  color: #000000;
}

@media (max-width: 768px) {
  section .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    widows: 100%;
    height: 90vh;
  }

  section .contentBx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    z-index: 1;
  }

  section .contentBx .formBx {
    width: 100%;
    padding: 40px;
    background: rgb(255 255 255 / 0.9);
    margin: 50px;
  }

  section .contentBx .formBx h3 {
    color: #607d8b;
    text-align: center;
    margin: 30px 0 10px;
    font-weight: 500;
  }
}
</style>
