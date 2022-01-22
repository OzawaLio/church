import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutCh",
    name: "aboutCh",
    component: () => import("../views/AboutCh.vue"),
  },
  {
    path: "/worship",
    name: "worship",
    component: () => import("../views/Worship.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("../views/Gallery.vue"),
  },
  {
    path: "/schoolCh",
    name: "schoolCh",
    component: () => import("../views/SchoolCh.vue"),
  },
  {
    path: "/meetings",
    name: "meetings",
    component: () => import("../views/Meetings.vue"),
  },

  {
    path: "/sample",
    name: "sample",
    component: () => import("../views/Sample.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
