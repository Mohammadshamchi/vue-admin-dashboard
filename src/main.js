import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "animate.css/animate.min.css";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

createApp(App).use(store).use(router).mount("#app");
// Initialize Netlify Identity
netlifyIdentityWidget.init();
// Initialize GoTru Js for NEtlify
export const auth = new GoTrue({
  APIUrl: "https://vue-dashboard-block-z.netlify.app/.netlify/identity",
  setCookie: true,
});
