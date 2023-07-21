<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="login">
      <img src="@/assets/blok-z_logo_white.svg" alt="" v-show="isDarkMode" />
      <img src="@/assets/blok-z-dark.svg" alt="" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Request Account
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="email"
          required
        />
        <button>Request Account</button>
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
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "RequestAccount",
  components: {
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
      let slackURL = "https://slack.com/api/chat.postMessage";
      const data = {
        channel: "blockz",
        text: `${email} has requested admin access to BLOK-Z`,
      };
      fetch(slackURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "xoxb-5627446277249-5627455001905-ha6rP5ilHq8zxTL3QKFKjF2l",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json()) // Add this line to parse the response
        .then((data) => {
          if (data.ok) {
            // If Slack API responds with ok: true
            this.$router.push({
              name: "signin",
              params: {
                userRequestedAccount: true,
                email: email,
              },
            });
          } else {
            alert("Error sending to Slack: " + data.error); // Display Slack's error message
          }
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
