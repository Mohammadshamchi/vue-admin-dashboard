<template>
  <div class="bubble">
    <div class="message">{{ text }}</div>
  </div>
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
