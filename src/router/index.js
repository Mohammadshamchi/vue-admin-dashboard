import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamView from "@/views/TeamView";
import SignIn from "../views/SignInFlow/SignIn";
import RequestAccount from "../views/SignInFlow/RequestAccount";
import RecoverAccount from "../views/SignInFlow/RecoverAccount";
import * as netlifyIdentityWidget from "netlify-identity-widget";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signin",
    name: "requestAccount",
    component: RequestAccount,
  },
  {
    path: "/signin",
    name: "recoverAccount",
    component: RecoverAccount,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });
  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});
export default router;
