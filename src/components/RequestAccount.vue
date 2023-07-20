<template>
  <div id="app">
    <link
      href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2"
      rel="stylesheet"
      type="text/css"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <transition name="slide-in-right" enter-active-class="animated slideInRight ">
    <div
      v-if="show"
      class="request"
      :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
    >
      Don't Have Blok-Z Account
      <router-link to="/request">Request an account</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.request {
  position: absolute;
  top: 40px;
  right: 40px;
}
.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}
.login {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
