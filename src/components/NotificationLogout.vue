<template>
  <link
    href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2"
    rel="stylesheet"
    type="text/css"
  />
  <transition
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutRight"
  >
    <div v-show="show" class="bubble">
      <div class="message">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NotificationLogout",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px 5px 10px;
  background-color: $blue;
}

.message {
  @include medium-text;
  color: $white;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
