<template>
  <div class="hamburger" :class="{ open: isOpen }" @click="$emit('change')">
    <span class="line line1" />
    <span class="line line2" />
    <span class="line line3" />
    <span class="line line4" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hamburger",
  props: {
    isOpen: Boolean,
  },
});
</script>

<style scoped lang="scss">
.hamburger {
  position: relative;
  width: 30px;
  height: 22px;
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
  .line {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: var(--light-blue);
    border-radius: 5px;
    opacity: 1;
    left: 0;
    transition: all 0.25s ease-in-out;
  }
  .line1 {
    top: 0px;
  }
  .line2,
  .line3 {
    top: 10px;
  }
  .line4 {
    top: 20px;
  }
}

.hamburger.open {
  .line1,
  .line4 {
    top: 10px;
    width: 0%;
    left: 50%;
  }
  .line2 {
    transform: rotate(45deg);
  }
  .line3 {
    transform: rotate(-45deg);
  }
}
</style>
