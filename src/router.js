import {createRouter, createWebHistory} from "vue-router";
import mainPage from "@/components/main-page";
import pekarnProducts from "@/components/pekarn-products";
import pekarnVacancies from "@/components/pekarn-vacancies";

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
        },

        {
            path: '/products',
            name: "products",
            component: pekarnProducts,
            meta: {
                title: "PRODUCTS"
            },
        },

        {
            path: '/vacancies',
            name: "vacancies",
            component: pekarnVacancies,
            meta: {
                title: "VACANCIES"
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
