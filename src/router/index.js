import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamView from "@/views/TeamView";
import SignIn from "../views/SignInFlow/SignIn";
import RequestAccount from "../views/SignInFlow/RequestAccount";
import RecoverAccount from "../views/SignInFlow/RecoverAccount";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
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

export default router;
