import {createRouter, createWebHistory} from "vue-router";
import mainPage from "@/components/main-page";
import pekarnProducts from "@/components/pekarn-products";

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
