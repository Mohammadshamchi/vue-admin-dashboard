<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/blok-z_logo_white.svg" alt="" v-show="isDarkMode" />
      <img src="@/assets/blok-z-dark.svg" alt="" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Blok-Z
      </h4>
      <input
        type="email"
        placeholder="Email"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <input
        type="password"
        placeholder="Password"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="({ 'light-link': isDarkMode }, { 'dark-link': !isDarkMode })"
        >Forgot your password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
  },
  // perform logic before
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.animated {
  animation-duration: 2s; // Adjust as needed.
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  //v:view h: height 100 : 100%
  min-height: 100vh;
}
.login {
  width: 400px;
}
.slide-in-right-enter-active {
  background-color: red;
}
</style>
