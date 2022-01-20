import Vue from "vue";
import VueRouter from "vue-router";
import Personal from "../components/Personal.vue";
import Social from "../components/Social.vue";
import Certificates from '../components/Certificates.vue';
import Resume from '../components/Resume.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Personal",
    component: Personal,
  },
  {
    path: "/social",
    name: "Social",
    component: Social,
    // () =>
    //   import(/* webpackChunkName: "about" */ "../views/Jokes.vue"),
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: Certificates,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
