<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <NotificationLogout v-if="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/blok-z_logo_white.svg" alt="" v-show="isDarkMode" />
      <img src="@/assets/blok-z-dark.svg" alt="" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Blok-Z
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="password"
          required
        />
        <button>Sign In</button>
      </form>
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
import NotificationLogout from "@/components/NotificationLogout.vue";
import { auth } from "@/main";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    NotificationLogout,
  },
  data() {
    return {
      email: "",
      password: "",
      hasText: false,
      text: "",
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then(() => {
          this.$router.replace("/");
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    },
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out";
    } else if (params.userRecoveredAccount) {
      this.hasText = true;
      this.text = `A recovery email has been Sent ${params.email}`;
    } else if (params.userRequestedAccount) {
      this.hasText = true;

      this.text = `Your Request Has been sent to BLOK-Z`;
    }
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
