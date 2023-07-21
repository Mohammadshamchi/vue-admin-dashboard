<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/blok-z_logo_white.svg" alt="" v-show="isDarkMode" />
      <img src="@/assets/blok-z-dark.svg" alt="" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Recover Account
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="email"
          required
        />
        <button>Send Email</button>
      </form>
      <router-link
        to="/signin"
        :class="({ 'light-link': isDarkMode }, { 'dark-link': !isDarkMode })"
        >Already have an Blok-Z account? Sign in now.</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import { auth } from "@/main";

export default {
  name: "RecoverAccount",
  components: {
    RequestAccount,
    ThemeSwitch,
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

      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              email: email,
            },
          });
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
