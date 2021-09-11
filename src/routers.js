import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import SignInTest from "./components/viewtest/SignIn-test.vue";
import LoginTest from "./components/viewtest/Login-test.vue";
import SignInSignUp from "./components/viewtest/SignIn-SignUp.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { 
        name: "Home", 
        component: Home, 
        path: "/" 
    },
    { 
        name: "SignUp", 
        component: SignUp, 
        path: "/Sign-up" 
    },
    { 
        name: "SignIn", 
        component: SignIn, 
        path: "/Sign-in" 
    },
    { 
        name: "SignInTest", 
        component: SignInTest, 
        path: "/Sign-in-text" 
    },
    { 
        name: "LoginTest", 
        component: LoginTest, 
        path: "/Login-test" 
    },
    { 
        name: "SignInSignUp", 
        component: SignInSignUp, 
        path: "/SignIn-SignUp" 
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;