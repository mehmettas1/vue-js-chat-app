import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("current user in auth guard:", user);
  if (!user) {
    next({ name: "welcome" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/chatroom",
    name: "chatroom",
    beforeEnter: requireAuth,
    component: () => import("../views/Chatroom.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
