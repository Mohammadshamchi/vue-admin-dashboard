<template>
  <nav></nav>
  <router-view />
</template>
<script>
import "animate.css";
// App.vue
export default {
  name: "App",
  watch: {
    isDarkMode(newVal) {
      document.body.style.background = newVal ? "#212c4f" : "#f0f3f5";
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  mounted() {
    document.body.style.background = this.isDarkMode ? "#212c4f" : "#f0f3f5";
  },
};
</script>

<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
body {
  background-color: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include mamad-style($white);
}

#app {
  font-family: $system-font-family;
  text-align: center;
  color: $white;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
