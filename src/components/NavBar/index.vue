<template>
  <nav class="navbar">
    <ul :class="{ letterExpand: letterExpand }">
      <li><a href="#about">About Wes</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#work">Work Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "NavBar",
  setup: () => {
    const letterExpand = ref(false);

    onMounted(() => {
      setTimeout(() => (letterExpand.value = true), 500);
    });

    return { letterExpand };
  },
});
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  width: 100%;

  ul {
    opacity: 0;
    display: flex;
    justify-content: flex-end;

    li {
      list-style: none;
      padding: 20px;

      a {
        font-size: 14px;
        text-decoration: none;
        color: var(--light-blue);
      }
    }
  }
}
</style>
<style>
.letterExpand {
  animation: letterExpand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

@keyframes letterExpand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

</style>
