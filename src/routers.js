import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import Login from "./components/Login.vue";
import SignInSignUp from "./components/SignIn-SignUp.vue";

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
        name: "Login", 
        component: Login, 
        path: "/Login" 
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