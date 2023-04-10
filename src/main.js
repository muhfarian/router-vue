import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


import Home from "./components/Home.vue";
import About from "./components/About.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
];

const router= createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes
});


export default router;


createApp(App).use(router).mount('#app')
