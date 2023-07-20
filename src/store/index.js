import { createStore } from "vuex";

// Initial State
if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}
const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode,
};

// Getters objects of functions isDarkMode is function
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};
// index.js
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      window.localStorage.setItem("isDarkMode", "true");
    }
  },
};

// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  },
};

export default createStore({
  state,
  getters,
  mutations: mutations,
  actions: actions,
  modules: {},
});
