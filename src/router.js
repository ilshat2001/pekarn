import {createRouter, createWebHistory} from "vue-router";
import mainPage from "@/components/main-page";
import pekarnProducts from "@/components/pekarn-products";
import pekarnVacancies from "@/components/pekarn-vacancies";
import pekarnAbout from "@/components/pekarn-about";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "mainPage",
            component: mainPage,
            meta: {
                title: "PEKARN"
            },
            props: {
                default: true,
                sidebar: false
            },
        },

        {
            path: '/products',
            name: "products",
            component: pekarnProducts,
            meta: {
                title: "PRODUCTS"
            },
            props: {
                default: true,
                sidebar: false
            },
        },

        {
            path: '/vacancies',
            name: "vacancies",
            component: pekarnVacancies,
            meta: {
                title: "VACANCIES"
            },
            props: {
                default: true,
                sidebar: false
            },
        },
        {
            path: '/about',
            name: "about",
            component: pekarnAbout,
            meta: {
                title: "ABOUT"
            },
            props: {
                default: true,
                sidebar: false
            },
        },
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})
