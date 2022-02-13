import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ("../views/SH001V.vue"),
    },
    {
        path: "/ac",
        name: "aboutChurch",
        component: () =>
            import ("../views/AC001V.vue"),
    },
    {
        path: "/ws",
        name: "worship",
        component: () =>
            import ("../views/WS001V.vue"),
    },
    {
        path: "/gl",
        name: "gallery",
        component: () =>
            import ("../views/GL001V.vue"),
    },
    {
        path: "/cs",
        name: "churchSchool",
        component: () =>
            import ("../views/CS001V.vue"),
    },
    {
        path: "/mt",
        name: "meetings",
        component: () =>
            import ("../views/MT001V.vue"),
    },

    {
        path: "/sample",
        name: "sample",
        component: () =>
            import ("../views/Sample.vue"),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;